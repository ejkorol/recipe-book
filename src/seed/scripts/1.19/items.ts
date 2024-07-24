import prisma from "../../../utils/prismaClient";
import readFile from "../../../utils/readFile";
import { checkFile } from "../../../utils/checkFile";
import path from "path";

const items = async (data: string) => {
  try {
    const itemData = readFile(data);
    let itemsWithImages = 0;
    let itemsWithoutImages = 0;

    for (const item of itemData) {
      const { image, ...rest } = item;
      const imagePath = path.resolve(__dirname, "../../../../public/images/1.19", `${item.name}.png`);

      if (checkFile(imagePath)) {
        itemsWithImages++;
        const insertedItem = await prisma.item.create({
          data: {
            ...rest,
            image: `/images/1.19/${item.name}.png`,
          },
        });
        console.log(`Successfully seeded: ${insertedItem.name} with image`);
      } else {
        itemsWithoutImages++;
        const insertedItem = await prisma.item.create({
          data: {
            ...rest,
            image: null
          },
        });
        console.log(`Successfully seeded: ${insertedItem.name} without image`);
      };
    };

    const totalItems = itemsWithImages + itemsWithoutImages;
    const percentage = (itemsWithImages/totalItems)* 100;

    console.log(`\n`);
    console.info(`Completed: ${data}`);
    console.info(`Items with image: ${itemsWithImages}`);
    console.info(`Items without image: ${itemsWithoutImages}`);
    console.info(`Percentage of Items with images: ${percentage.toFixed(2)}%`);
    console.log(`\n`);

  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(e.message);
    } else {
      throw new Error(`unknown error: ${e}`);
    };
  };
};

export { items };
