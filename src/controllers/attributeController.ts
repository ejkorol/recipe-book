import { Request, Response, NextFunction } from "express";

import {
  getAllAttributes as getAllAttributesService
} from "../services/attributeService";

export const getAllAttributes = async (
  _req: Request,
  res: Response,
  next: NextFunction) => {

  try {
    const attributes = await getAllAttributesService();
    res.json(attributes);

  } catch (e) {
    next(e);
  };

};
