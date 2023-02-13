import { expect } from 'chai';
import sinon from 'sinon';
// import mongoose from 'mongoose';
import CarODM from '../../../src/Models/CarModel';
import Car from '../../../src/Services/CarService';

describe('create method', function() {
  let sandbox: sinon.SinonSandbox;
  let carODMStub: sinon.SinonStub;
  let car: any;
  beforeEach(function() {
    sandbox = sinon.createSandbox();
    car = { model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    }; carODMStub = sandbox.stub(CarODM.prototype, 'create').resolves(car);
  });
  afterEach(function() { sandbox.restore(); });

  it('should create a car', async function() {
    const createdCar = await new Car().create(car);
    expect(createdCar).to.be.an.instanceOf(Car);
    expect(createdCar).to.have.property('id', car.id);
    expect(createdCar).to.have.property('model', car.model);
    expect(createdCar).to.have.property('year', car.year);
    expect(createdCar).to.have.property('color', car.color);
    expect(createdCar).to.have.property('status', car.status);
    expect(createdCar).to.have.property('buyValue', car.buyValue);
    expect(createdCar).to.have.property('doorsQty', car.doorsQty);
    expect(createdCar).to.have.property('seatsQty', car.seatsQty);
  });

  it('should call the create method of CarODM once', async function() {
    await new Car().create(car); 
    sinon.assert.calledOnce(carODMStub);
  });
});
