import { Router } from "express";
import {
  getAllAttributes as getAllAttributesController,
  postAttribute as postAttributeController,
  deleteAttribute as deleteAttributeController
} from "../controllers/attributeController";

const router = Router();

router
  .get('/', getAllAttributesController)
  .post('/', postAttributeController)
  .delete('/:id', deleteAttributeController)

export default router;
