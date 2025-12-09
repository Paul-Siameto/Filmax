import { Router } from 'express';
import { body } from 'express-validator';
import { login, register, refreshToken } from '../controllers/auth.controller';
import { validateRequest } from '../middleware/validateRequest';

const router = Router();

// @route   POST /api/auth/register
// @desc    Register a new user
// @access  Public
router.post(
  '/register',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Please provide a valid email'),
    body('password')
      .isLength({ min: 8 })
      .withMessage('Password must be at least 8 characters long'),
    body('phone').optional().isMobilePhone('any').withMessage('Please provide a valid phone number'),
  ],
  validateRequest,
  register
);

// @route   POST /api/auth/login
// @desc    Login user & get token
// @access  Public
router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Please provide a valid email'),
    body('password').exists().withMessage('Password is required'),
  ],
  validateRequest,
  login
);

// @route   POST /api/auth/refresh-token
// @desc    Refresh access token
// @access  Public
router.post(
  '/refresh-token',
  [
    body('refreshToken').notEmpty().withMessage('Refresh token is required'),
  ],
  validateRequest,
  refreshToken
);

export default router;
