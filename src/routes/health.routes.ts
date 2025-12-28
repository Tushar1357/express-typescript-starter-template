import { Router } from 'express';
import { getHealth, getLiveness, getReadiness } from '../controllers';

const router = Router();

router.get('/', getHealth);
router.get('/readiness', getReadiness);
router.get('/liveness', getLiveness);

export default router;
