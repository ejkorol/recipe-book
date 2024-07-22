import { Router } from "express";
import {
  getAllCraftingRecipes as getAllCraftingRecipesController
} from "../controllers/craftingRecipeController";

const router = Router();

router
  .get('/', getAllCraftingRecipesController)

export default router;
