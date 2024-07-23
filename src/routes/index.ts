import { Router } from "express";

import itemRoutes from "./itemRoutes";
import blockRoutes from "./blockRoutes";
import foodRoutes from "./foodRoutes";

const router = Router();

router.use('/api/items', itemRoutes);
router.use('/api/blocks', blockRoutes);
router.use('/api/food', foodRoutes);

export default router;
