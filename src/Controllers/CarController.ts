import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() { 
    const carId: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
      status: this.req.body.status ? this.req.body.status : false,
    };

    try {
      const newCar = await this.service.create(carId);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }
  public async getById() {
    const { id } = this.req.params;
    const idRegex = /^[a-f\d]{24}$/i;
    if (!idRegex.test(id)) return this.res.status(422).json({ message: 'Invalid mongo id' });
    const car = await this.service.getById(id);
    if (!car) return this.res.status(404).json({ message: 'Car not found' });
    return this.res.status(200).json(car);
  } 
  public async getAll() {
    const cars = await this.service.getAll();
    return this.res.status(200).json(cars);
  }
  public async update() {
    const { id } = this.req.params;
    const newCar = this.req.body;

    const regexId = /^[a-f\d]{24}$/i;
    if (!regexId.test(id)) return this.res.status(422).json({ message: 'Invalid mongo id' });

    const carExists = await this.service.getById(id);
    if (!carExists) return this.res.status(404).json({ message: 'Car not found' });

    const car = await this.service.update(id, newCar);
    return this.res.status(200).json(car);
  }
}

export default CarController;