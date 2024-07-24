import { Request, Response, NextFunction } from "express";
import { handleError } from "../utils/typeGuards";
import {
  MissingParameterError,
  NotFoundError,
  ValidationError,
} from "../utils/errors";

import {
  getAllBiomes as getAllBiomesService,
  getBiomeById as getBiomeByIdService,
  searchBiomes as searchBiomesService,
} from "../services/biomeService";

export const getAllBiomes = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const biomes = await getAllBiomesService();
    res.json(biomes);
  } catch (e) {
    next(handleError(e));
  }
};

export const getBiomeById = async (
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

    const biome = await getBiomeByIdService(numericId);

    if (!biome) {
      throw new NotFoundError("Biome not found.");
    };

    res.json(biome);
  } catch (e) {
    next(handleError(e));
  }
};

export const getBiomeBySearch = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const query = req.query.q as string;

    if (!query) {
      throw new MissingParameterError("Query parameter 'q' is required.");
    }

    const biomes = await searchBiomesService(query);

    if (biomes.length === 0) {
      throw new NotFoundError(`No biomes found with: ${query}`);
    }

    res.json(biomes);
  } catch (e) {
    next(handleError(e));
  }
};
