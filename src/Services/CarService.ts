import ICar from '../Interfaces/ICar';
import Car from '../Models/Car';

export default class CarService {
  private cars: Car[] = [];

  create(car: ICar): Car {
    const newCar = new Car(car);
    this.cars.push(newCar);
    return newCar;
  }
}
