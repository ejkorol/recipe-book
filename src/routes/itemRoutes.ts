import { Router } from 'express';
import {
  getAllItems as getAllItemsController,
  searchItem as searchItemController,
  getItem as getItemController
} from '../controllers/itemController';

const router = Router();

router
  .get('/', getAllItemsController)
  .get('/search', searchItemController)
  .get('/:id', getItemController)

export default router;
