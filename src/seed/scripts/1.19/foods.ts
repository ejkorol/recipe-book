import prisma from "../../../utils/prismaClient";
import readFile from "../../../utils/readFile";
import { checkFile } from "../../../utils/checkFile";
import path from "path";

const foods = async (data: string) => {
  try {
    const foodData = readFile(data);
    let foodsWithImages = 0;
    let foodsWithoutImages = 0;

    for (const food of foodData) {
      const { image, ...rest } = food;
      const imagePath = path.resolve(__dirname, "../../../../public/images/1.19", `${food.name}.png`);

      if (checkFile(imagePath)) {
        foodsWithImages++;
        const insertedFood = await prisma.food.create({
          data: {
            ...rest,
            image: `/images/1.19/${food.name}.png`
          },
        });
        console.log(`Successfully seeded: ${insertedFood.name} with image`);
      } else {
        foodsWithoutImages++;
        const insertedFood = await prisma.food.create({
          data: {
            ...rest,
            image: null
          },
        });
        console.log(`Successfully seeded: ${insertedFood.name} without image`);
      };
    };

    const totalFood = foodsWithImages + foodsWithoutImages;
    const percentage = (foodsWithImages/totalFood) * 100;

    console.log(`\n`);
    console.info(`Completed: ${data}`);
    console.info(`Foods with image: ${foodsWithImages}`);
    console.info(`Foods without image: ${foodsWithoutImages}`);
    console.info(`Percentage of foods with images: ${percentage.toFixed(2)}%`);
    console.log(`\n`);

  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(e.message);
    } else {
      throw new Error(`unknown error: ${e}`);
    };
  };
};

export { foods };
