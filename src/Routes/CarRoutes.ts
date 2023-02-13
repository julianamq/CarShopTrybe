import { Router } from 'express';
import CarsController from '../Controllers/CarController';

const router = Router();

router.route('/cars')
  .post((req, res, next) => new CarsController(req, res, next).create());

export default router;  