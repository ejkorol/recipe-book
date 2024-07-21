import { Router } from "express";
import itemRoutes from "./itemRoutes";
import attributeRoutes from "./attributeRoutes";

const router = Router();

router.use('/api/items', itemRoutes);
router.use('/api/attributes', attributeRoutes);

export default router;
