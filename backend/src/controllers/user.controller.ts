import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import bcrypt from 'bcryptjs';
import { prisma } from '../server';
import { AppError } from '../middleware/errorHandler';

// Import generateToken from auth controller
import { generateToken } from './auth.controller';

// @desc    Get current user profile
// @route   GET /api/user/profile
// @access  Private
export const getProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!user) {
      return next(
        new AppError('User not found', StatusCodes.NOT_FOUND)
      );
    }

    res.status(StatusCodes.OK).json({
      status: 'success',
      data: {
        user,
      },
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get user's bookings
// @route   GET /api/user/bookings
// @access  Private
export const getUserBookings = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bookings = await prisma.booking.findMany({
      where: { userId: req.user.id },
      include: {
        tour: {
          select: {
            id: true,
            title: true,
            location: true,
            duration: true,
            price: true,
            image: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    res.status(StatusCodes.OK).json({
      status: 'success',
      results: bookings.length,
      data: {
        bookings,
      },
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update user profile
// @route   PATCH /api/user/profile
// @access  Private
export const updateProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, phone } = req.body;
    
    const updatedUser = await prisma.user.update({
      where: { id: req.user.id },
      data: {
        name,
        phone,
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    res.status(StatusCodes.OK).json({
      status: 'success',
      data: {
        user: updatedUser,
      },
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update user password
// @route   PATCH /api/user/update-password
// @access  Private
export const updatePassword = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { currentPassword, newPassword } = req.body;

    // 1) Get user from collection
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
    });

    if (!user) {
      return next(
        new AppError('User not found', StatusCodes.NOT_FOUND)
      );
    }

    // 2) Check if current password is correct
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return next(
        new AppError('Your current password is incorrect', StatusCodes.UNAUTHORIZED)
      );
    }

    // 3) Hash the new password and update user
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    await prisma.user.update({
      where: { id: req.user.id },
      data: { password: hashedPassword },
    });

    // 4) Generate new JWT token
    const token = generateToken(user.id, user.role);

    res.status(StatusCodes.OK).json({
      status: 'success',
      token,
      message: 'Password updated successfully',
    });
  } catch (error) {
    next(error);
  }
};
