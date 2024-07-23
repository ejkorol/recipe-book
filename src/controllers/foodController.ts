import { Request, Response, NextFunction } from "express";
import { handleError } from "../utils/typeGuards";
import {
  MissingParameterError,
  NotFoundError,
  ValidationError
} from "../utils/errors";

import {
  getAllFood as getAllFoodService,
  getFoodById as getFoodByIdService,
  searchFood as searchFoodService
} from "../services/foodService";

export const getAllFood = async (
  _req: Request,
  res: Response,
  next: NextFunction) => {

  try {
    const food = await getAllFoodService();
    res.json(food);
  } catch (e) {
    next(handleError(e));
  };
};

export const getFoodById = async (
  req: Request,
  res: Response,
  next: NextFunction) => {
  try {
    const id = req.params.id;

    const numericId = Number(id);

    if (isNaN(numericId)) {
      throw new ValidationError("Parameter must be a of type 'number'");
    };

    const food = await getFoodByIdService(numericId);

    if (!food) {
      return res.status(404).json({ message: 'Food item not found' });
    };

    res.json(food);
  } catch (e) {
    next(handleError(e));
  };
};

export const searchFood = async (
  req: Request,
  res: Response,
  next: NextFunction) => {

  try {
    const query = req.query.q as string;

    if (!query) {
      throw new MissingParameterError("Query paramater 'q' is required.");
    };

    const foods = await searchFoodService(query);

    if (foods.length === 0) {
      throw new NotFoundError(`No food items with: ${query}`);
    };

    res.json(foods);
  } catch (e) {
    next(handleError(e));
  };
};
