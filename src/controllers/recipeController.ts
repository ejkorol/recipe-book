import { Request, Response, NextFunction } from "express";
import { handleError } from "../utils/typeGuards";
import { NotFoundError, ValidationError } from "../utils/errors";

import {
  getAllRecipes as getAllRecipesService,
  getRecipe as getRecipeService
} from "../services/recipeService";

export const getAllRecipes = async (
  _req: Request,
  res: Response,
  next: NextFunction) => {

  try {
    const recipes = await getAllRecipesService();
    res.json(recipes);
  } catch (e) {
    next(handleError(e));
  };
};

export const getRecipe = async (
  req: Request,
  res: Response,
  next: NextFunction) => {

  try {
    const resultId = req.params.result;
    const numericId = Number(resultId);

    if (isNaN(numericId)) {
      throw new ValidationError("Parameter must be of a type 'number'");
    };

    const recipes = await getRecipeService(numericId);

    if (recipes.length === 0) {
      throw new NotFoundError(`No recipes found for: ${resultId}`);
    };

    res.json(recipes);
  } catch (e) {
    next(handleError(e));
  };
};
