import { Router } from "express";

import {
  getAllRecipes as getAllRecipesController,
  getRecipe as getRecipeController
} from "../controllers/recipeController";

const router = Router();

router
  .get('/', getAllRecipesController)
  .get('/:result', getRecipeController)

export default router;
