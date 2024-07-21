import { Router } from "express";

import itemRoutes from "./itemRoutes";
import attributeRoutes from "./attributeRoutes";
import typeRoutes from "./typeRoutes";

const router = Router();

router.use('/api/items', itemRoutes);
router.use('/api/attributes', attributeRoutes);
router.use('/api/types', typeRoutes);

export default router;
