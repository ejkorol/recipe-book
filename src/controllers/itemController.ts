import { Request, Response, NextFunction } from "express";
import { handleError } from "../utils/typeGuards";

import {
  getAllItems as getAllItemsService,
  searchItem as searchItemService,
  getItem as getItemService
} from "../services/itemService";
import { MissingParameterError, NotFoundError, ValidationError } from "../utils/errors";

export const getAllItems = async (
  _req: Request,
  res: Response,
  next: NextFunction) => {

  try {
    const items = await getAllItemsService();
    res.json(items);

  } catch (e) {
    next(handleError(e));
  };

};

export const searchItem = async (
  req: Request,
  res: Response,
  next: NextFunction) => {

  try {
    const query = req.query.q as string;

    if (!query) {
      throw new MissingParameterError("Query paramater 'q' is required.");
    };

    const items = await searchItemService(query);

    if (items.length === 0) {
      throw new NotFoundError(`No items with: ${query}`);
    };

    res.json(items);
  } catch (e) {
    next(handleError(e));
  };
};

export const getItem = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  try {
    const id = req.params.id;

    const numericId = Number(id);

    if (isNaN(numericId)) {
      throw new ValidationError("Paramater must be of a type 'number'");
    };

    const item = await getItemService(numericId);

    if (!item) {
      throw new NotFoundError("Item not found");
    };

    res.json(item);
  } catch (e) {
    next(handleError(e));
  };
};
