import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { prisma } from '../server';
import { AppError } from '../middleware/errorHandler';

// @desc    Get all tours
// @route   GET /api/tours
// @access  Public
export const getTours = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // 1) Filtering
    const queryObj = { ...req.query };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach(el => delete queryObj[el as keyof typeof queryObj]);

    // 2) Advanced filtering
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);

    let query = prisma.tour.findMany({
      where: JSON.parse(queryStr),
      include: {
        bookings: {
          select: {
            id: true,
            status: true,
            travelDate: true,
            travelers: true,
          },
        },
      },
    });

    // 3) Sorting
    if (req.query.sort) {
      const sortBy = (req.query.sort as string).split(',').join(' ');
      query = prisma.tour.findMany({
        ...query,
        orderBy: sortBy.split(' ').map((field) => ({
          [field.startsWith('-') ? field.substring(1) : field]: field.startsWith('-') ? 'desc' : 'asc',
        })),
      });
    }

    // 4) Field limiting
    if (req.query.fields) {
      const fields = (req.query.fields as string).split(',').join(' ');
      query = prisma.tour.findMany({
        ...query,
        select: fields.split(' ').reduce((acc, field) => {
          acc[field] = true;
          return acc;
        }, {} as Record<string, boolean>),
      });
    }

    // 5) Pagination
    const page = parseInt(req.query.page as string, 10) || 1;
    const limit = parseInt(req.query.limit as string, 10) || 10;
    const skip = (page - 1) * limit;

    const tours = await prisma.tour.findMany({
      ...query,
      skip,
      take: limit,
    });

    res.status(StatusCodes.OK).json({
      status: 'success',
      results: tours.length,
      data: {
        tours,
      },
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single tour
// @route   GET /api/tours/:id
// @access  Public
export const getTour = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tour = await prisma.tour.findUnique({
      where: { id: req.params.id },
      include: {
        bookings: {
          select: {
            id: true,
            status: true,
            travelDate: true,
            travelers: true,
          },
        },
      },
    });

    if (!tour) {
      return next(
        new AppError('No tour found with that ID', StatusCodes.NOT_FOUND)
      );
    }

    res.status(StatusCodes.OK).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create new tour
// @route   POST /api/admin/tours
// @access  Private/Admin
export const createTour = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {
      title,
      location,
      duration,
      price,
      type,
      groupSize,
      difficulty,
      description,
      overview,
      highlights,
      itinerary,
      inclusions,
      exclusions,
      image,
      gallery,
    } = req.body;

    const tour = await prisma.tour.create({
      data: {
        title,
        location,
        duration: parseInt(duration, 10),
        price: parseFloat(price),
        type,
        groupSize: parseInt(groupSize, 10),
        difficulty,
        status: 'active',
        description,
        overview,
        highlights: highlights ? JSON.parse(highlights) : [],
        itinerary: itinerary ? JSON.parse(itinerary) : [],
        inclusions: inclusions ? JSON.parse(inclusions) : [],
        exclusions: exclusions ? JSON.parse(exclusions) : [],
        image: image || null,
        gallery: gallery ? JSON.parse(gallery) : [],
      },
    });

    res.status(StatusCodes.CREATED).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update tour
// @route   PATCH /api/admin/tours/:id
// @access  Private/Admin
export const updateTour = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tour = await prisma.tour.update({
      where: { id: req.params.id },
      data: req.body,
    });

    if (!tour) {
      return next(
        new AppError('No tour found with that ID', StatusCodes.NOT_FOUND)
      );
    }

    res.status(StatusCodes.OK).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete tour
// @route   DELETE /api/admin/tours/:id
// @access  Private/Admin
export const deleteTour = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await prisma.tour.delete({
      where: { id: req.params.id },
    });

    res.status(StatusCodes.NO_CONTENT).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all unique tour locations
// @route   GET /api/destinations
// @access  Public
export const getTourLocations = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const locations = await prisma.tour.findMany({
      select: {
        location: true,
      },
      distinct: ['location'],
    });

    res.status(StatusCodes.OK).json({
      status: 'success',
      results: locations.length,
      data: {
        locations: locations.map((loc: { location: string }) => loc.location),
      },
    });
  } catch (error) {
    next(error);
  }
};
