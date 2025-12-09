import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import jwt, { SignOptions } from 'jsonwebtoken';
import { StatusCodes } from 'http-status-codes';
import { prisma } from '../server';
import { AppError } from '../middleware/errorHandler';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      JWT_SECRET: string;
      JWT_EXPIRES_IN: string;
      JWT_REFRESH_SECRET: string;
      JWT_REFRESH_EXPIRES_IN: string;
    }
  }
}

interface JwtPayload {
  id: string;
  role: string;
  iat?: number;
  exp?: number;
}

// Generate JWT Token
export const generateToken = (id: string, role: string): string => {
  const payload = { id, role };
  const expiresIn = process.env.JWT_EXPIRES_IN || '1d';
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn } as SignOptions);
};

// Generate Refresh Token
const generateRefreshToken = (id: string): string => {
  const payload = { id };
  const expiresIn = process.env.JWT_REFRESH_EXPIRES_IN || '7d';
  return jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn } as SignOptions);
};

// Create and send token
const createSendToken = (user: any, statusCode: number, res: Response) => {
  const token = generateToken(user.id, user.role);
  const refreshToken = generateRefreshToken(user.id);

  // Remove password from output
  user.password = undefined;

  res.status(statusCode).json({
    status: 'success',
    token,
    refreshToken,
    data: {
      user,
    },
  });
};

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, password, phone } = req.body;

    // Check if user already exists
    const userExists = await prisma.user.findUnique({
      where: { email },
    });

    if (userExists) {
      return next(
        new AppError('User already exists with this email', StatusCodes.CONFLICT)
      );
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        phone: phone || null,
        role: 'user',
      },
    });

    createSendToken(user, StatusCodes.CREATED, res);
  } catch (error) {
    next(error);
  }
};

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;

    // 1) Check if email and password exist
    if (!email || !password) {
      return next(
        new AppError('Please provide email and password', StatusCodes.BAD_REQUEST)
      );
    }

    // 2) Check if user exists && password is correct
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return next(
        new AppError('Incorrect email or password', StatusCodes.UNAUTHORIZED)
      );
    }

    // 3) If everything ok, send token to client
    createSendToken(user, StatusCodes.OK, res);
  } catch (error) {
    next(error);
  }
};

// @desc    Refresh access token
// @route   POST /api/auth/refresh-token
// @access  Public
export const refreshToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return next(
        new AppError('No refresh token provided', StatusCodes.BAD_REQUEST)
      );
    }

    // Verify refresh token
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET) as JwtPayload;

    // Check if user still exists
    const currentUser = await prisma.user.findUnique({
      where: { id: decoded.id },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });

    if (!currentUser) {
      return next(
        new AppError('The user belonging to this token no longer exists.', StatusCodes.UNAUTHORIZED)
      );
    }

    // Generate new access token
    const token = generateToken(currentUser.id, currentUser.role);

    res.status(StatusCodes.OK).json({
      status: 'success',
      token,
    });
  } catch (error) {
    next(new AppError('Invalid refresh token', StatusCodes.FORBIDDEN));
  }
};
