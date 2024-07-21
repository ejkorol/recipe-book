import { Router } from "express";
import {
  getAllAttributes as getAllAttributesController
} from "../controllers/attributeController";

const router = Router();

router
  .get('/', getAllAttributesController)

export default router;
