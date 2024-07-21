import { Router } from "express";
import {
  getAllTypes as getAllItemTypesController,
  postType as postItemTypeController
} from "../controllers/typeController";

const router = Router();

router
  .get("/", getAllItemTypesController)
  .post("/", postItemTypeController)

export default router;
