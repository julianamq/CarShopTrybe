import { Router } from 'express';
import CarsController from '../Controllers/CarController';

const router = Router();

router.route('/cars')
  .post((req, res, next) => new CarsController(req, res, next).create());
router.route('/cars/:id')
  .get((req, res, next) => new CarsController(req, res, next).getById());
router.route('/cars')
  .get((req, res, next) => new CarsController(req, res, next).getAll());
router.put(
  '/cars/:id',
  (req, res, next) => new CarsController(req, res, next).update(),
);
export default router;        