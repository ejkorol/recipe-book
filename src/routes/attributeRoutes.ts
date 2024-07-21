import { Router } from "express";
import {
  getAllAttributes as getAllAttributesController,
  postAttribute as postAttributeController
} from "../controllers/attributeController";

const router = Router();

router
  .get('/', getAllAttributesController)
  .post('/', postAttributeController)

export default router;
