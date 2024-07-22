import prisma from "../utils/prismaClient";
import { handleError } from "../utils/typeGuards";
import { CraftingRecipeIngredient } from "@prisma/client";

export const getAllCraftingRecipeIngredients = async (): Promise<CraftingRecipeIngredient[]> => {
  try {
    const craftingRecipeIngredients = await prisma.craftingRecipeIngredient.findMany();
    return craftingRecipeIngredients;
  } catch (e: unknown) {
    throw handleError(e);
  };
};
