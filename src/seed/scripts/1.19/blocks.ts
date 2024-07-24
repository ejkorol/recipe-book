import prisma from "../../../utils/prismaClient";
import readFile from "../../../utils/readFile";
import { checkFile } from "../../../utils/checkFile";
import path from "path";

const blocks = async (data: string) => {
  try {
    const blockData = readFile(data);
    let blocksWithImages = 0;
    let blocksWithoutImages = 0;

    for (const block of blockData) {
      const { image, ...rest } = block;
      const imagePath = path.resolve(__dirname, "../../../../public/images/1.19", `${block.name}.png`);

      if (checkFile(imagePath)) {
        blocksWithImages++;
        const insertedBlock = await prisma.block.create({
          data: {
            ...rest,
            image: `/images/1.19/${block.name}.png`
          },
        });
          console.log(`Successfully seeded: ${insertedBlock.name} with image`);
        } else {
          blocksWithoutImages++;
          const insertedBlock = await prisma.block.create({
            data: {
              ...rest,
              image: null
            },
          });
          console.log(`Successfully seeded: ${insertedBlock.name} without image`);
        };
      };

    const totalBlocks = blocksWithImages + blocksWithoutImages;
    const percentage = (blocksWithImages/totalBlocks) * 100;

    console.log(`\n`);
    console.info(`Completed: ${data}`);
    console.info(`Blocks with image: ${blocksWithImages}`);
    console.info(`Blocks without image: ${blocksWithoutImages}`);
    console.info(`Percentage of blocks with images: ${percentage.toFixed(2)}%`);
    console.log(`\n`);

  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(e.message);
    } else {
      throw new Error(`unknown error: ${e}`);
    };
  };
};

export { blocks };
