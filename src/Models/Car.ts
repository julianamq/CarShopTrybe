import ICar from '../Interfaces/ICar';

export default class Car {
  private readonly doorsQty: number;
  private readonly seatsQty: number;
  public readonly id: string;
  public readonly model: string;
  public readonly year: number;
  public readonly color: string;
  public readonly status: boolean;
  public readonly buyValue: number;
  
  constructor(car: ICar) {
    this.id = car.id;
    this.model = car.model;
    this.year = car.year;
    this.color = car.color;
    this.status = car.status || false;
    this.buyValue = car.buyValue;
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
  }
}
