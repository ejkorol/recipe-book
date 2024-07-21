import { Request, Response, NextFunction } from "express";
import { handleError } from "../utils/typeGuards";

import {
  getAllTypes as getAllTypesService
} from "../services/typeService";

export const getAllTypes = async (
  _req: Request,
  res: Response,
  next: NextFunction) => {

  try {
    const types = await getAllTypesService();
    res.json(types);
  } catch (e) {
    next(handleError(e))
  };

};
