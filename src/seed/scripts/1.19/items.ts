import prisma from "../../../utils/prismaClient";
import readFile from "../../../utils/readFile";

const items = async (data: string) => {
  try {
    const itemData = readFile(data);
    for (const item of itemData) {
      const insertedItem = await prisma.item.create({
        data: {
          ...item,
        }
      });
      console.log(`Successfully seeded: ${insertedItem.name}`);
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

export { items };
