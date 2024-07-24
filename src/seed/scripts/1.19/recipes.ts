import prisma from "../../../utils/prismaClient";
import readFile from "../../../utils/readFile";

const recipes = async (data: string) => {
  try {
    const recipeData = readFile(data);
    const keys = Object.keys(recipeData);

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const items = recipeData[key];

      for (let j = 0; j < items.length; j++) {
        const item = items[j];
        const recipe = {
          ingredients: item.ingredients,
          recipe: item.inShape,
          quantity: item.result.count,
          result: item.result.id
        };

        const insertedRecipe = await prisma.recipe.create({
          data: {
            ...recipe
          }
        });
        console.log(`Successfully seeded: ${insertedRecipe.id}`);
      }
    }

    console.log(`\n`);
    console.info(`Completed: ${data}`);
    console.log(`\n`);

  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(e.message);
    } else {
      throw new Error(`unknown error: ${e}`)
    };
  };
};

export { recipes };
