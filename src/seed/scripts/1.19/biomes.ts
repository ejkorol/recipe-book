import prisma from "../../../utils/prismaClient";
import readFile from "../../../utils/readFile";

const biomes = async (data: string) => {
  try {
    const biomeData = readFile(data);
    for (const biome of biomeData) {
      const insertedBiome = await prisma.biome.create({
        data: {
          ...biome
        }
      });
      console.log(`Successfully seeded: ${insertedBiome.name}`);
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

export { biomes };
