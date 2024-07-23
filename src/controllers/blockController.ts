import { Request, Response, NextFunction } from "express";
import { handleError } from "../utils/typeGuards";

import { getAllBlocks as getAllBlocksService } from "../services/blockService";

export const getAllBlocks = async (
  _req: Request,
  res: Response,
  next: NextFunction) => {

  try {
    const blocks = await getAllBlocksService();
    res.json(blocks);

  } catch (e) {
    next(handleError(e));
  }
};
