import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorCycle';

const router = Router();

router.get(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).getAll(),
);
router.route('/motorcycles')
  .post((req, res, next) => new MotorcycleController(req, res, next).create());
router.get(
  '/motorcycles/:id',
  (req, res, next) => new MotorcycleController(req, res, next).getById(),
);
router.put(
  '/motorcycles/:id',
  (req, res, next) => new MotorcycleController(req, res, next).update(),
);
export default router;        