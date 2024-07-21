import { IAttribute } from "../attribute";
import { IRecipe } from "../recipe";

export interface IItem {
  name: string;
  description: string;
  image: string;
  itemTypeId: string;
  stackSize: number;
  durability: number;
  isMineable: boolean | null;
  requiredToolId: string | null;
  attributes?: IAttribute[] | null;
  recipes?: IRecipe[] | null;
};
