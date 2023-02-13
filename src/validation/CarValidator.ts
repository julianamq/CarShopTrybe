import ICar from '../Interfaces/ICar';

export default class CarValidator {
  static validate(car: ICar): string[] {
    const errors = [];
  
    if (!car.model) {
      errors.push('Model is required');
    }
  
    if (!car.year) {
      errors.push('Year is required');
    }
  
    if (!car.color) {
      errors.push('Color is required');
    }
  
    if (!car.buyValue) {
      errors.push('BuyValue is required');
    }
  
    if (!car.doorsQty) {
      errors.push('DoorsQty is required');
    }
  
    if (!car.seatsQty) {
      errors.push('SeatsQty is required');
    }
  
    return errors;
  }
}
