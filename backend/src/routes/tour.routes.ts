import { Router } from 'express';
import { body, query } from 'express-validator';
import { validateRequest } from '../middleware/validateRequest';
import { protect } from '../middleware/auth.middleware';
import {
  getTours,
  getTour,
  createTour,
  updateTour,
  deleteTour,
  getTourLocations,
} from '../controllers/tour.controller';

const router = Router();

// Public routes
router.get('/', [
  query('page').optional().isInt({ min: 1 }).withMessage('Page must be a positive integer'),
  query('limit').optional().isInt({ min: 1 }).withMessage('Limit must be a positive integer'),
  query('sort').optional().isString().withMessage('Sort must be a string'),
  query('fields').optional().isString().withMessage('Fields must be a string'),
  validateRequest,
], getTours);

router.get('/destinations', getTourLocations);

router.get('/:id', [
  validateRequest,
], getTour);

// Protected routes (require authentication)
router.use(protect);

// Admin routes
router.post(
  '/',
  [
    body('title').notEmpty().withMessage('Title is required'),
    body('location').notEmpty().withMessage('Location is required'),
    body('duration').isInt({ min: 1 }).withMessage('Duration must be a positive integer'),
    body('price').isFloat({ min: 0 }).withMessage('Price must be a positive number'),
    body('type').notEmpty().withMessage('Tour type is required'),
    body('groupSize').isInt({ min: 1 }).withMessage('Group size must be a positive integer'),
    body('difficulty').isIn(['easy', 'moderate', 'difficult']).withMessage('Difficulty must be one of: easy, moderate, difficult'),
    body('description').notEmpty().withMessage('Description is required'),
    body('overview').notEmpty().withMessage('Overview is required'),
    body('highlights').optional().isJSON().withMessage('Highlights must be a valid JSON array'),
    body('itinerary').optional().isJSON().withMessage('Itinerary must be a valid JSON array'),
    body('inclusions').optional().isJSON().withMessage('Inclusions must be a valid JSON array'),
    body('exclusions').optional().isJSON().withMessage('Exclusions must be a valid JSON array'),
    body('image').optional().isURL().withMessage('Image must be a valid URL'),
    body('gallery').optional().isJSON().withMessage('Gallery must be a valid JSON array'),
    validateRequest,
  ],
  createTour
);

router.patch(
  '/:id',
  [
    body('duration').optional().isInt({ min: 1 }).withMessage('Duration must be a positive integer'),
    body('price').optional().isFloat({ min: 0 }).withMessage('Price must be a positive number'),
    body('groupSize').optional().isInt({ min: 1 }).withMessage('Group size must be a positive integer'),
    body('difficulty').optional().isIn(['easy', 'moderate', 'difficult']).withMessage('Difficulty must be one of: easy, moderate, difficult'),
    body('status').optional().isIn(['active', 'inactive']).withMessage('Status must be either active or inactive'),
    body('highlights').optional().isJSON().withMessage('Highlights must be a valid JSON array'),
    body('itinerary').optional().isJSON().withMessage('Itinerary must be a valid JSON array'),
    body('inclusions').optional().isJSON().withMessage('Inclusions must be a valid JSON array'),
    body('exclusions').optional().isJSON().withMessage('Exclusions must be a valid JSON array'),
    body('gallery').optional().isJSON().withMessage('Gallery must be a valid JSON array'),
    validateRequest,
  ],
  updateTour
);

router.delete('/:id', deleteTour);

export default router;
