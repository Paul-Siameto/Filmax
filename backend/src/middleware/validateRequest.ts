import { Request, Response, NextFunction } from 'express';
import { validationResult, ValidationChain } from 'express-validator';
import { StatusCodes } from 'http-status-codes';
import { AppError } from './errorHandler';

export const validateRequest = (validations: ValidationChain[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await Promise.all(validations.map(validation => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    const errorMessages = errors.array().map(err => ({
      field: err.param,
      message: err.msg,
    }));

    next(
      new AppError(
        'Validation failed',
        StatusCodes.UNPROCESSABLE_ENTITY,
        errorMessages
      )
    );
  };
};

export const validate = (validations: ValidationChain[]) => {
  return validateRequest(validations);
};
