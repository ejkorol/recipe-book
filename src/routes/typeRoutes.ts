import { Router } from "express";
import {
  getAllTypes as getAllItemTypesController
} from "../controllers/typeController";

const router = Router();

router
  .get("/", getAllItemTypesController)

export default router;
