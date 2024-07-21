import {
  ApiError,
  ValidationError,
  UnknownError
} from './errors';

import { ZodError } from 'zod';

/*
 * appropriately transforms different types of errors
 * into the custom error classes in `./errors.ts`.
 *
 * consider this as a centralized place to handle error logic.
 *
 * by using `handleError` in both services and controllers,
 * the api maintains consistent error handling all throughout;
 * making cleaner and more maintable code.
*/

export function handleError(e: unknown): ApiError {
  if (e instanceof ZodError) {
    return new ValidationError('Invalid data provided');
  }

  if (e instanceof ApiError) {
    return e;
  }

  if (e instanceof Error) {
    return new UnknownError(`An unexpected error occurred: ${e.message}`);
  }

  return new UnknownError();
}
