import { Router } from 'express';
import CarsController from '../Controllers/cars.controller';

const router = Router();

router.post('/cars', CarsController.create);

export default router;