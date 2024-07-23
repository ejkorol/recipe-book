import { Router } from "express";

import itemRoutes from "./itemRoutes";

const router = Router();

router.use('/api/items', itemRoutes);

export default router;
