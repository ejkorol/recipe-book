import prisma from "../utils/prismaClient";
import { IItem } from "../../types/item";
import { Item } from "@prisma/client";

export const getAllItems = async (): Promise<Item[]> => {
  try {
    const items = await prisma.item.findMany({});
    return items;
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(`Failed to fetch items: ${e.message}`);
    };
    throw new Error("Failed to fetch items: Unknown error");
  };
};

export const postItem = async (itemData: IItem): Promise<Item> => {
  try {
    const itemTypeExists = await prisma.itemType.findUnique({
      where: { id: itemData.itemTypeId }
    });

    if (!itemTypeExists) {
      throw new Error(`ItemType with id ${itemData.itemTypeId} does not exist`);
    };

    if (itemData.attributes) {
      for (const attribute of itemData.attributes) {
        const attributeExists = await prisma.itemAttribute.findUnique({
          where: { id: attribute.attributeId }
        });
        if (!attributeExists) {
          throw new Error(`ItemAttribute with id ${attribute.attributeId} does not exist`);
        };
      };
    };

    if (itemData.recipes) {
      for (const recipe of itemData.recipes) {
        const recipeExists = await prisma.craftingRecipe.findUnique({
          where: { id: recipe.recipeId }
        });
        if (!recipeExists) {
          throw new Error(`CraftingRecipe with id ${recipe.recipeId} does not exist`);
        };
      };
    };

    const item = await prisma.item.create({
      data: {
        name: itemData.name,
        description: itemData.description,
        image: itemData.image,
        itemTypeId: itemData.itemTypeId,
        stackSize: itemData.stackSize,
        durability: itemData.durability,
        isMineable: itemData.isMineable ?? false,
        requiredToolId: itemData.requiredToolId ?? undefined,
        attributes: {
          create: itemData.attributes?.map(attr => ({
            attributeId: attr.attributeId,
            value: attr.value,
          })) ?? [],
        },
        recipes: {
          create: itemData.recipes?.map(recipe => ({
            recipeId: recipe.recipeId,
            quantity: recipe.quantity,
          })) ?? [],
        },
      },
    });

    return item;
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(`Failed to post item: ${e.message}`);
    };
    throw new Error("Failed to post item: Unknown error");
  };
};
