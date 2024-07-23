import prisma from "../../../utils/prismaClient";
import readFile from "../../../utils/readFile";

const entities = async (data: string) => {
  try {
    const entityData = readFile(data);
    for (const entity of entityData) {
      const insertedEntity = await prisma.entity.create({
        data: {
          ...entity
        }
      });
      console.log(`Successfully seeded: ${insertedEntity.name}`);
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

export { entities };
