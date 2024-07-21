import { Request, Response, NextFunction } from "express";
import { handleError } from "../utils/typeGuards";
import { ItemAttributeValuesSchema } from "../schemas/itemAttributeValuesSchema";

import {
  getAllItemAttributeValues as getAllItemAttributeValuesService,
  postItemAttributeValues as postItemAttributeValuesService
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

export const postItemAttributeValues = async (
  req: Request,
  res: Response,
  next: NextFunction) => {

  try {
    const itemAttributeValuesData = ItemAttributeValuesSchema.parse(req.body);
    const itemAttributeValues = await postItemAttributeValuesService(itemAttributeValuesData);
    res.json(itemAttributeValues);
  } catch (e) {
    next(handleError(e));
  };

};
