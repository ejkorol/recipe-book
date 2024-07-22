import { Router } from "express";

import itemRoutes from "./itemRoutes";
import attributeRoutes from "./attributeRoutes";
import typeRoutes from "./typeRoutes";
import itemAttributeValuesRoutes from "./itemAttributeValuesRoutes";
import craftingRecipeRoutes from "./craftingRecipeRoutes";
import craftingRecipeIngredientRoutes from "./craftingRecipeIngredientRoutes"

const router = Router();

router.use('/api/items', itemRoutes);
router.use('/api/attributes', attributeRoutes);
router.use('/api/types', typeRoutes);
router.use('/api/item-attributes', itemAttributeValuesRoutes);
router.use('/api/crafting-recipes', craftingRecipeRoutes);
router.use('/api/crafting-recipe-ingredients', craftingRecipeIngredientRoutes);

export default router;
