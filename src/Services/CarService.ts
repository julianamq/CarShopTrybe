import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarModel';

class CarService {
  public async create(car: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);
    return new Car({
      id: newCar.id,
      model: newCar.model,
      year: newCar.year,
      color: newCar.color,
      status: newCar.status,
      buyValue: newCar.buyValue,
      doorsQty: newCar.doorsQty,
      seatsQty: newCar.seatsQty,
    });
  }

  public async getAll() {
    const carODM = new CarODM();
    const cars = await carODM.getAll();
    return cars.map((car) => ({ id: car._id,
      model: car.model,
      year: car.year,
      color: car.color,
      status: car.status,
      buyValue: car.buyValue,
      doorsQty: car.doorsQty,
      seatsQty: car.seatsQty }));
  }

  public async getById(id: string) {
    const carODM = new CarODM();
    const car = await carODM.getById(id);
    if (!car) return null;
    return {
      id: car._id,
      model: car.model,
      year: car.year,
      color: car.color,
      status: car.status,
      buyValue: car.buyValue,
      doorsQty: car.doorsQty,
      seatsQty: car.seatsQty };
  }
  public async update(id: string, newCar: ICar) {
    const carODM = new CarODM();
    const car = await carODM.update(id, newCar);
    if (!car) return null;
    return { ...newCar, id };
  }
}

export default CarService;
