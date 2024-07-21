import { Request, Response, NextFunction } from "express";
import { ItemTypeSchema } from "../schemas/typeSchema";
import { handleError } from "../utils/typeGuards";

import {
  getAllTypes as getAllTypesService,
  postType as postTypeService
} from "../services/typeService";

export const getAllTypes = async (
  _req: Request,
  res: Response,
  next: NextFunction) => {

  try {
    const types = await getAllTypesService();
    res.json(types);
  } catch (e) {
    next(handleError(e));
  };

};

export const postType = async (
  req: Request,
  res: Response,
  next: NextFunction) => {

  try {
    const typeData = ItemTypeSchema.parse(req.body);
    const type = await postTypeService(typeData);
    res.json(type);
  } catch (e) {
    next(handleError(e));
  };
};
