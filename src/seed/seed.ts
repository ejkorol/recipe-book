import { data } from "../../data";
import {
  blocks,
  foods,
  biomes,
  entities,
  items,
  materials,
  recipes
} from "./scripts/1.20.2/index"

const version = "1.20.2";
const paths = data[version].files

const main = async () => {
  await blocks(paths.blocks);
  await foods(paths.foods);
  await biomes(paths.biomes);
  await entities(paths.entities);
  await items(paths.items);
  await materials(paths.materials);
  await recipes(paths.recipes);
};

main();
