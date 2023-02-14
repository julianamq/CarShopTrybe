import IMotorcycle from '../Interfaces/IMoto';

class Motorcycle {
  public id: string | undefined;
  protected model: string;
  public year: number;
  public color: string;
  public buyValue: number;
  private category: string;
  private engineCapacity: number;
  public status: boolean | undefined;

  constructor({
    id,
    model,
    year,
    color,
    status,
    buyValue,
    category,
    engineCapacity,   
  }: IMotorcycle) {
    this.id = id;
    this.model = model;
    this.year = year;
    this.color = color;
    this.buyValue = buyValue;
    this.engineCapacity = engineCapacity;
    this.category = category;
    this.status = status;
  }

  public setId(id: string) {
    this.id = id;
  }

  public getId() {
    return this.id;
  }

  public setModel(model: string) {
    this.model = model;
  }

  public getModel() {
    return this.model;
  }

  public setColor(color: string) {
    this.color = color;
  }

  public getColor() {
    return this.color;
  }

  public setYear(year: number) {
    this.year = year;
  }

  public getYear() {
    return this.year;
  }

  public setStatus(status: boolean) {
    this.status = status;
  }

  public getStatus() {
    return this.status;
  }

  public setBuyValue(buyValue: number) {
    this.buyValue = buyValue;
  }

  public getBuyValue() {
    return this.buyValue;
  }

  public setCategory(category: string) {
    this.category = category;
  }

  public getDoCategory() {
    return this.category;
  }
  
  public setEngineCapacity(engineCapacity: number) {
    this.engineCapacity = engineCapacity;
  }

  public getSeatsQty() {
    return this.engineCapacity;
  }
}

export default Motorcycle;