import { Request, Response, NextFunction } from "express";
import { handleError } from "../utils/typeGuards";

import {
  getAllBlocks as getAllBlocksService,
  searchBlock as searchBlockService,
  getBlock as getBlockService
} from "../services/blockService";
import { MissingParameterError, NotFoundError, ValidationError } from "../utils/errors";

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

export const searchBlock = async (
  req: Request,
  res: Response,
  next: NextFunction) => {

  try {
    const query = req.query.q as string;

    if (!query) {
      throw new MissingParameterError("Query parameter 'q' is required.");
    };

    const blocks = await searchBlockService(query);

    if (blocks.length === 0) {
      throw new NotFoundError(`No blocks with ${query}`);
    };

    res.json(blocks);
  } catch (e) {
    next(handleError(e));
  };
};

export const getBlock = async (
  req: Request,
  res: Response,
  next: NextFunction) => {

  try {
    const id = req.params.id;

    const numericId = Number(id);

    if (isNaN(numericId)) {
      throw new ValidationError("Parameter must be of type 'number'")
    };

    const block = await getBlockService(numericId);

    if (!block) {
      throw new NotFoundError("Block not found.");
    };
    
    res.json(block);
  } catch (e) {
    next(handleError(e));
  };
};
