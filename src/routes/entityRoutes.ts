import { Router } from 'express';
import {
    getAllEntities as getAllEntitiesController,
    getEntityById as getEntityByIdController,
    getEntityBySearch as getEntityBySearchController
} from '../controllers/entityController';

const router = Router();

router
    .get('/', getAllEntitiesController)
    .get('/search', getEntityBySearchController)
    .get('/:id', getEntityByIdController)

export default router;