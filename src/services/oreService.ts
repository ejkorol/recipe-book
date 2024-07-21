import prisma from "../utils/prismaClient";
import { Ore } from "@prisma/client";

export const getAllOres = async (): Promise<Ore[]> => {
  try {
    const ores = await prisma.ore.findMany({});
    return ores;
  } catch (e: any) {
    throw new Error(e);
  };
};
