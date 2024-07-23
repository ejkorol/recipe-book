import { Router } from 'express';
import {
  getAllItems as getAllItemsController
} from '../controllers/itemController';

/*
 * consider this file as the singular router than handles
 * the import and export of all routes in the api into
 * the main api
*/

const router = Router();

router
  .get('/', getAllItemsController)

export default router;
