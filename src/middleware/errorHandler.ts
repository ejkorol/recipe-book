import { Request, Response, NextFunction } from "express";
import { ApiError } from "../utils/errors";

/*
 * For error handling middleware, next is not required
 * as it is intended to purely catch and handle errors
 * rather than pass them along.
*/

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      error: err.name,
      message: err.message
    });
  }

  return res.status(500).json({
    error: "InternalServerError",
    message: "An unexpected error occured"
  });
};
