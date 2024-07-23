import { Router } from "express";

import itemRoutes from "./itemRoutes";
import blockRoutes from "./blockRoutes";

const router = Router();

router.use('/api/items', itemRoutes);
router.use('/api/blocks', blockRoutes)

export default router;
