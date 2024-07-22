import { Request, Response, NextFunction } from "express";
import { handleError } from "../utils/typeGuards";

import {
  getAllCraftingRecipes as getAllCraftingRecipesService
} from "../services/craftingRecipeService";

export const getAllCraftingRecipes = async (
  _req: Request,
  res: Response,
  next: NextFunction) => {

  try {
    const recipes = await getAllCraftingRecipesService();
    res.json(recipes);
  } catch (e) {
    next(handleError(e));
  };
};
