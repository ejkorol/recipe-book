import { Router } from 'express';
import {
    getAllBlocks as getAllblockController
} from '../controllers/blockController';

const router = Router();

router
    .get('/', getAllblockController)

export default router;