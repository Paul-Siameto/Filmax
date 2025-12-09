import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { prisma } from '../server';
import { AppError } from '../middleware/errorHandler';

// @desc    Get all users
// @route   GET /api/admin/users
// @access  Private/Admin
export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    res.status(StatusCodes.OK).json({
      status: 'success',
      results: users.length,
      data: {
        users,
      },
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all bookings
// @route   GET /api/admin/bookings
// @access  Private/Admin
export const getAllBookings = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bookings = await prisma.booking.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        tour: {
          select: {
            id: true,
            title: true,
            location: true,
            price: true,
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

// @desc    Update booking status
// @route   PATCH /api/admin/bookings/:id/status
// @access  Private/Admin
export const updateBookingStatus = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { status } = req.body;
    const { id } = req.params;

    // Validate status
    if (!['pending', 'confirmed', 'cancelled', 'completed'].includes(status)) {
      return next(
        new AppError(
          'Invalid status. Must be one of: pending, confirmed, cancelled, completed',
          StatusCodes.BAD_REQUEST
        )
      );
    }

    const booking = await prisma.booking.update({
      where: { id },
      data: { status },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        tour: {
          select: {
            id: true,
            title: true,
          },
        },
      },
    });

    if (!booking) {
      return next(
        new AppError('No booking found with that ID', StatusCodes.NOT_FOUND)
      );
    }

    // TODO: Send email notification to user about booking status update

    res.status(StatusCodes.OK).json({
      status: 'success',
      data: {
        booking,
      },
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get dashboard statistics
// @route   GET /api/admin/dashboard
// @access  Private/Admin
export const getDashboardStats = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const [
      totalUsers,
      totalTours,
      totalBookings,
      totalRevenue,
      recentBookings,
      popularTours,
    ] = await Promise.all([
      prisma.user.count(),
      prisma.tour.count(),
      prisma.ooking.count(),
      prisma.booking.aggregate({
        _sum: {
          totalPrice: true,
        },
      }),
      prisma.booking.findMany({
        take: 5,
        orderBy: {
          createdAt: 'desc',
        },
        include: {
          user: {
            select: {
              name: true,
              email: true,
            },
          },
          tour: {
            select: {
              title: true,
            },
          },
        },
      }),
      prisma.booking.groupBy({
        by: ['tourId'],
        _count: {
          tourId: true,
        },
        orderBy: {
          _count: {
            tourId: 'desc',
          },
        },
        take: 5,
      }),
    ]);

    res.status(StatusCodes.OK).json({
      status: 'success',
      data: {
        stats: {
          totalUsers,
          totalTours,
          totalBookings,
          totalRevenue: totalRevenue._sum.totalPrice || 0,
        },
        recentBookings,
        popularTours,
      },
    });
  } catch (error) {
    next(error);
  }
};
