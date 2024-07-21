import { Router } from 'express';
import {
  getAllOres as getAllOresHandler,
  postOre as postOreHandler
} from '../controllers/oreController';

const router = Router();

router
  .get('/', getAllOresHandler)
  .post('/', postOreHandler)

export default router;
