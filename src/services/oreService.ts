import prisma from "../utils/prismaClient";
import { Ore } from "@prisma/client";
import { IOre } from "../../types/ores";

export const getAllOres = async (): Promise<Ore[]> => {
  try {
    const ores = await prisma.ore.findMany({});
    return ores;
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(`Failed to fetch ores: ${e.message}`);
    };
    throw new Error("Failed to fetch ores: Unknown error");
  };
};

export const postOre = async (data: IOre): Promise<Ore> => {
  try {
    const ore = await prisma.ore.create({
      data: {
        name: data.name,
        type: data.type,
        description: data.description,
        hardness: data.hardness,
        blastResistance: data.blastResistance,
        toolRequired: data.toolRequired,
        minableWith: data.minableWith,
        texture: data.texture,
        color: data.color,
        drops: {
          create: data.drops,
        },
      },
    });

    return ore;
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(`Failed to create ore: ${e.message}`);
    };
    throw new Error("Failed to create ore: Unknown error");
  };
};
