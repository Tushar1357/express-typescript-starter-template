import { Router } from 'express';
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from '../controllers';
import { validateRequest } from '../middleware/validateRequest';
import { createUserSchema, updateUserSchema } from '../validation';

const router = Router();

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', validateRequest(createUserSchema), createUser);
router.put('/:id', validateRequest(updateUserSchema), updateUser);
router.delete('/:id', deleteUser);

export default router;
