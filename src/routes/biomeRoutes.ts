import { Router } from 'express';
import {
    getAllBiomes as getAllBiomesController,
    getBiomeById as getBiomeByIdController,
    getBiomeBySearch as getBiomeBySearchController
} from '../controllers/biomeController';

const router = Router();

router
    .get('/', getAllBiomesController)
    .get('/search', getBiomeBySearchController)
    .get('/:id', getBiomeByIdController)

export default router;