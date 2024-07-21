import { Router } from 'express';
import {
  getAllItems as getAllItemsController,
  postItem as postItemController
} from '../controllers/itemController';

const router = Router();

router
  .get('/', getAllItemsController)
  .post('/', postItemController)

export default router;
