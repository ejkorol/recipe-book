import { Router } from "express";
import {
  getAllAttributes as getAllAttributesController,
  postAttribute as postAttributeController,
  deleteAttribute as deleteAttributeController,
  updateAttribute as updateAttributeController
} from "../controllers/attributeController";

const router = Router();

router
  .get('/', getAllAttributesController)
  .post('/', postAttributeController)
  .delete('/:id', deleteAttributeController)
  .put('/:id', updateAttributeController);
export default router;
