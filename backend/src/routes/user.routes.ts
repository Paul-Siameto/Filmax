import { Router } from 'express';
import { body } from 'express-validator';
import { validateRequest } from '../middleware/validateRequest';
import { protect } from '../middleware/auth.middleware';
import {
  getProfile,
  updateProfile,
  updatePassword,
  getUserBookings,
} from '../controllers/user.controller';

const router = Router();

// Protect all routes after this middleware
router.use(protect);

// User profile routes
router.get('/profile', getProfile);

router.patch(
  '/profile',
  [
    body('name').optional().isString().withMessage('Name must be a string'),
    body('phone').optional().isString().withMessage('Phone must be a string'),
    validateRequest,
  ],
  updateProfile
);

router.patch(
  '/update-password',
  [
    body('currentPassword').notEmpty().withMessage('Current password is required'),
    body('newPassword')
      .isLength({ min: 8 })
      .withMessage('Password must be at least 8 characters long'),
    validateRequest,
  ],
  updatePassword
);

// User bookings
router.get('/bookings', getUserBookings);

export default router;
