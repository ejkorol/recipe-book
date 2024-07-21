import { Request, Response, NextFunction } from "express";
import { ItemAttributeSchema } from "../schemas/attributeSchema";
import { handleError } from "../utils/typeGuards";

import {
  getAllAttributes as getAllAttributesService,
  postAttribute as postAttributeService
} from "../services/attributeService";

export const getAllAttributes = async (
  _req: Request,
  res: Response,
  next: NextFunction) => {

  try {
    const attributes = await getAllAttributesService();
    res.json(attributes);

  } catch (e) {
    next(handleError(e));
  };

};

export const postAttribute = async (
  req: Request,
  res: Response,
  next: NextFunction) => {

  try {
    const attributeData = ItemAttributeSchema.parse(req.body);
    const attribute = await postAttributeService(attributeData);
    res.json(attribute);
  } catch (e) {
    next(handleError(e));
  };

};
