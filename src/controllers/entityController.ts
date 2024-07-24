import { Request, Response, NextFunction } from "express";
import { handleError } from "../utils/typeGuards";
import {
  MissingParameterError,
  NotFoundError,
  ValidationError,
} from "../utils/errors";

import {
  getAllEntities as getAllEntitiesService,
  getEntityById as getEntityByIdService,
  getEntityBySearch as getEntityBySearchService,
} from "../services/entityService";

export const getAllEntities = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const entities = await getAllEntitiesService();
    res.json(entities);
  } catch (e) {
    next(handleError(e));
  }
};

export const getEntityById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;

    const numericId = Number(id);

    if (isNaN(numericId)) {
      throw new ValidationError("Parameter must be a of type 'number'");
    }

    const entity = await getEntityByIdService(numericId);

    if (!entity) {
      return res.status(404).json({ message: "Entity not found" });
    }

    res.json(entity);
  } catch (e) {
    next(handleError(e));
  }
};

export const getEntityBySearch = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const query = req.query.q as string;

    if (!query) {
      throw new MissingParameterError("Query parameter 'q' is required");
    }

    const entities = await getEntityBySearchService(query);

    if (entities.length === 0) {
      throw new NotFoundError(`No entities found with: ${query}`);
    }

    res.json(entities);
  } catch (e) {
    next(handleError(e));
  }
};
