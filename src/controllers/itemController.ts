import { Request, Response, NextFunction } from "express";
import { handleError } from "../utils/typeGuards";

import {
  getAllItems as getAllItemsService,
} from "../services/itemService";

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
