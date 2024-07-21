import { Router } from 'express';
import { getAllOres as getAllOresHandler } from '../controllers/oreController';

const router = Router();

router
  .get('/', getAllOresHandler);

export default router;
