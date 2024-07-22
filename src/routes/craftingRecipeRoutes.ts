import { Router } from "express";
import {
  getAllCraftingRecipes as getAllCraftingRecipesController,
  postCraftingRecipe as postCraftingRecipeController
} from "../controllers/craftingRecipeController";

const router = Router();

router
  .get('/', getAllCraftingRecipesController)
  .post('/', postCraftingRecipeController)

export default router;
