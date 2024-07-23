import prisma from "../utils/prismaClient";
import { handleError } from "../utils/typeGuards";
import { Recipe } from "@prisma/client";
import { IRecipe } from "../../types/recipe";

export const getAllRecipes = async (): Promise<Recipe[]> => {
  try {
    const recipe = await prisma.recipe.findMany();
    return recipe;
  } catch (e: unknown) {
    throw handleError(e);
  };
};

export const getRecipe = async (query: number): Promise<IRecipe[]> => {
  try {
    const recipes = await prisma.recipe.findMany({
      where: {
        result: query
      }
    });

    const recipeItem = await prisma.item.findFirst({
      where: {
        id: query
      }
    })

    const recipeList: (IRecipe[]) = [];

    /*
     * it's tetris time baby
    */

    for (const recipe of recipes) {
      if (Array.isArray(recipe.ingredients)) {

        const r: IRecipe = {
          id: query,
          name: recipeItem!.name,
          displayName: recipeItem!.displayName,
          recipe: null,
          ingredients: [],
          stackSize: recipeItem!.stackSize,
          quantity: recipe.quantity
        }
        r.ingredients!.push(...recipe.ingredients);
        for (let i = 0; i < r.ingredients!.length; i++) {
          const ingredient = await prisma.item.findFirst({
            where: {
              id: r.ingredients![i]
            }
          });
          r.ingredients![i] = ingredient!.name;
        };
        recipeList.push(r);
      };
      if (Array.isArray(recipe.recipe)) {
        const r: IRecipe = {
          id: query,
          name: recipeItem!.name,
          displayName: recipeItem!.displayName,
          recipe: [],
          ingredients: null,
          stackSize: recipeItem!.stackSize,
          quantity: recipe.quantity
        };
        r.recipe!.push(...recipe.recipe);
        let newRecipe = r.recipe!.map(row => row.map(() => []));
        for (let row = 0; row < r.recipe!.length; row++) {
          for (let col = 0; col < r.recipe![row].length; col++) {
            if (r.recipe![row][col] !== null) {
              const ingredient = await prisma.item.findFirst({
                where: {
                  id: r.recipe![row][col]
                }
              });
              newRecipe[row][col].push(ingredient!.name);
            } else {
              newRecipe[row][col].push(null);
            };
          };
        };
        r.recipe = newRecipe;
        recipeList.push(r);
      };
    };
    console.log(recipeList)
    return recipeList;
  } catch (e: unknown) {
    throw handleError(e);
  };
};
