import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(moto: IMotorcycle) {
    super(moto.model, moto.year, moto.color, moto.status || false, moto.buyValue, moto.id);
    this.category = moto.category;
    this.engineCapacity = moto.engineCapacity;
  }

  public getCategory(): string {
    return this.category;
  }
  public setCategory(value: string) {
    this.category = value;
  }

  public getEngineCapacity(): number {
    return this.engineCapacity;
  }
  public setEngineCapacity(value: number) {
    this.engineCapacity = value;
  }
}

export default Motorcycle;