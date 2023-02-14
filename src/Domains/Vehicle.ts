class Vehicle {
  protected id: string | undefined; // undefined se os dados não estiverem no banco (Ex: antes do cadastro)
  protected model: string;
  protected year: number;
  protected color: string;
  protected status = false;
  protected buyValue: number;
  
  constructor(
    model: string,
    year: number,
    color: string,
    status: boolean,
    buyValue: number,
    id: string | undefined,
  ) {
    this.id = id;
    this.model = model;
    this.year = year;
    this.color = color;
    this.status = status || false;
    this.buyValue = buyValue;
  }
  
  public getId() {
    return this.id;
  }
  
  public setId(id: string) {
    this.id = id;
  }
  
  public getModel(): string {
    return this.model;
  }
  
  public setModel(value: string) {
    this.model = value;
  }
  
  public getYear(): number {
    return this.year;
  }
  
  public setYear(value: number) {
    this.year = value;
  }
  
  public getColor(): string {
    return this.color;
  }
  
  public setColor(value: string) {
    this.color = value;
  }
  
  public getStatus(): boolean {
    return this.status;
  }
  
  public setStatus(value: boolean) {
    this.status = value;
  }
  
  public getBuyValue(): number {
    return this.buyValue;
  }
  
  public setBuyValue(value: number) {
    this.buyValue = value;
  }
}
  
export default Vehicle;