import { Request, Response, NextFunction } from "express";
import { handleError } from "../utils/typeGuards";

import {
  getAllItemAttributeValues as getAllItemAttributeValuesService
} from "../services/itemAttributeValuesService";

export const getAllItemAttributeValues = async (
  _req: Request,
  res: Response,
  next: NextFunction) => {

  try {
    const itemAttributeValues = await getAllItemAttributeValuesService();
    res.json(itemAttributeValues);
  } catch (e) {
    next(handleError(e));
  };
};
