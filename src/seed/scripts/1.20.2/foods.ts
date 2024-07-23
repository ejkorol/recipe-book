import prisma from "../../../utils/prismaClient";
import readFile from "../../../utils/readFile";

const foods = async (data: string) => {
  try {
    const foodData = readFile(data);
    for (const food of foodData) {
      const insertedFood = await prisma.food.create({
        data: {
          ...food
        }
      });
      console.log(`Successfully seeded: ${insertedFood.name}`);
    };
    console.info(`Completed: ${data}`);
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(e.message);
    } else {
      throw new Error(`unknown error: ${e}`);
    };
  };
};

export { foods };
