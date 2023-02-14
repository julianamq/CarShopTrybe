import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorCycle';

const router = Router();

router.route('/motorcycles')
  .post((req, res, next) => new MotorcycleController(req, res, next).create());

export default router;        