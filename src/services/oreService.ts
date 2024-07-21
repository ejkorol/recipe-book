import prisma from "../utils/prismaClient";
import { Ore } from "@prisma/client";

export const getAllOres = async (): Promise<Ore[]> => {
  const ores = await prisma.ore.findMany({});
  return ores;
};
