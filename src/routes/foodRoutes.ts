import { Router } from "express";

import {
  getAllFood as getAllFoodController,
  getFoodById as getFoodByIdController,
  searchFood as searchFoodController
} from "../controllers/foodController";

const router = Router();

router
  .get('/', getAllFoodController)
  .get('/search', searchFoodController)
  .get('/:id', getFoodByIdController)

export default router;
