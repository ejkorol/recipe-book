import { Router } from "express";
import {
  getAllItemAttributeValues as getAllItemAttributeValuesController
} from "../controllers/itemAttributeValuesController";

const router = Router();

router
  .get('/', getAllItemAttributeValuesController)

export default router;
