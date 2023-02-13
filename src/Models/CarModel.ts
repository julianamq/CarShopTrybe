import {
  Model,
  Schema,
  model,
  models,
} from 'mongoose';
import ICar from '../Interfaces/ICar';
  
class CarODM {
  private schema: Schema;
  private model: Model<ICar>;
  
  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    this.model = models.Car || model('Car', this.schema);
  }
  
  public async create(car: ICar): Promise<ICar> {
    return this.model.create({ ...car });
  }
  
  public async getAll() {
    return this.model.find();
  }
  
  public async getById(id: string) {
    return this.model.findById(id);
  }
  
  public async update(id: string, newCar: ICar) {
    return this.model.updateOne({ _id: id }, { ...newCar });
  }
  
  public async delete(id: string) {
    return this.model.deleteOne({ _id: id });
  }
}
  
export default CarODM;