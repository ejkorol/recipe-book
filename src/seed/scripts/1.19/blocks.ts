import prisma from "../../../utils/prismaClient";
import readFile from "../../../utils/readFile";

const blocks = async (data: string) => {
  try {
    const blockData = readFile(data);
    for (const block of blockData) {
      const insertedBlock = await prisma.block.create({
        data: {
          ...block
        },
      });
      console.log(`Successfully seeded: ${insertedBlock.name}`);
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

export { blocks };
