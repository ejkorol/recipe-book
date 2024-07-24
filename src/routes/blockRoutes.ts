import { Router } from 'express';
import {
  getAllBlocks as getAllblockController,
  searchBlock as searchBlockController,
  getBlock as getBlockController
} from '../controllers/blockController';

const router = Router();

router
  .get('/', getAllblockController)
  .get('/search', searchBlockController)
  .get('/:id', getBlockController)

export default router;
