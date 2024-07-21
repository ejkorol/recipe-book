import { Router } from "express";

import itemRoutes from "./itemRoutes";
import attributeRoutes from "./attributeRoutes";
import typeRoutes from "./typeRoutes";
import itemAttributeValuesRoutes from "./itemAttributeValuesRoutes";

const router = Router();

router.use('/api/items', itemRoutes);
router.use('/api/attributes', attributeRoutes);
router.use('/api/types', typeRoutes);
router.use('/api/item-attributes', itemAttributeValuesRoutes);

export default router;
