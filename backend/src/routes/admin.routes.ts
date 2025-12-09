import { Router } from 'express';
import { body, param } from 'express-validator';
import { validateRequest } from '../middleware/validateRequest';
import { protect, restrictTo } from '../middleware/auth.middleware';
import {
  getAllUsers,
  getAllBookings,
  updateBookingStatus,
  getDashboardStats,
} from '../controllers/admin.controller';
import { createTour, updateTour, deleteTour } from '../controllers/tour.controller';

const router = Router();

// Protect all routes after this middleware
router.use(protect);
router.use(restrictTo('admin'));

// Dashboard
router.get('/dashboard', getDashboardStats);

// User management
router.get('/users', getAllUsers);

// Tour management
router.post(
  '/tours',
  [
    body('title').notEmpty().withMessage('Title is required'),
    body('location').notEmpty().withMessage('Location is required'),
    body('duration').isInt({ min: 1 }).withMessage('Duration must be a positive integer'),
    body('price').isFloat({ min: 0 }).withMessage('Price must be a positive number'),
    body('type').notEmpty().withMessage('Tour type is required'),
    body('groupSize').isInt({ min: 1 }).withMessage('Group size must be a positive integer'),
    body('difficulty').isIn(['easy', 'moderate', 'difficult']).withMessage('Invalid difficulty level'),
    body('description').notEmpty().withMessage('Description is required'),
    body('overview').notEmpty().withMessage('Overview is required'),
    validateRequest,
  ],
  createTour
);

router.patch(
  '/tours/:id',
  [
    body('duration').optional().isInt({ min: 1 }).withMessage('Duration must be a positive integer'),
    body('price').optional().isFloat({ min: 0 }).withMessage('Price must be a positive number'),
    body('groupSize').optional().isInt({ min: 1 }).withMessage('Group size must be a positive integer'),
    body('difficulty').optional().isIn(['easy', 'moderate', 'difficult']).withMessage('Invalid difficulty level'),
    body('status').optional().isIn(['active', 'inactive']).withMessage('Invalid status'),
    validateRequest,
  ],
  updateTour
);

router.delete('/tours/:id', deleteTour);

// Booking management
router.get('/bookings', getAllBookings);

router.patch(
  '/bookings/:id/status',
  [
    param('id').isUUID().withMessage('Invalid booking ID'),
    body('status')
      .isIn(['pending', 'confirmed', 'cancelled', 'completed'])
      .withMessage('Invalid status. Must be one of: pending, confirmed, cancelled, completed'),
    validateRequest,
  ],
  updateBookingStatus
);

export default router;
