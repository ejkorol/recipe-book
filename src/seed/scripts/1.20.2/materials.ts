import prisma from "../../../utils/prismaClient";
import readFile from "../../../utils/readFile";

const materials = async (data: string) => {
  try {
    const materialData = readFile(data);
    const materials = Object.keys(materialData);
    for (let i = 0; i < materials.length; i++) {
      const materialName = materials[i];
      const data = materialData[materialName];
      const insertedMaterial = await prisma.material.create({
        data: {
          id: materialName,
          name: materialName,
          data: data
        }
      });
      console.log(`Successfully seeded: ${insertedMaterial.name}`);
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

export { materials };
