import chai from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import Car from '../../../src/Domains/Car';

const inputCarArray = [
  {
    model: 'Ferrari',
    year: 2022,
    color: 'Vermelho',
    status: true,
    buyValue: 10000000,
    doorsQty: 3,
    seatsQty: 2,
    id: '63319d80feb9f483ee823ac5',
  },
  {
    model: 'BMW',
    year: 2020,
    color: 'Azul',
    status: false,
    buyValue: 9000000,
    doorsQty: 3,
    seatsQty: 2,
    id: '63319d80feb9f483ee823ac5',
  },
];

const inputCarId = {
  _id: '63eaaac4bdec4079a2e41f77',
  model: 'Gol',
  year: 1995,
  color: 'Read',
  status: true,
  buyValue: 17.99,
  doorsQty: 4,
  seatsQty: 4,
};

const inputCarInvalidId = [
  {
    model: 'Ferrari',
    year: 2022,
    color: 'Vermelho',
    status: true,
    buyValue: 10000000,
    doorsQty: 3,
    seatsQty: 2,
    id: '633',
  },
];
const { expect } = chai;
describe('Busca por todos os carros', function () {
  it('Busca por todos os carros com SUCESSO', async function () {
    // Arrange
    const carOutput = inputCarArray.map((item) => new Car(item));

    sinon.stub(Model, 'find').resolves(carOutput);

    // Act
    const service = new CarService();
    const result = await service.getAll();

    // Assert
    expect(result).to.be.deep.equal(carOutput);

    sinon.restore();
  });

  it('Deveria buscar um carro com SUCESSO pelo seu ID', async function () {
    // Arrange
    const carIdOutput = new Car(inputCarId);

    sinon.stub(Model, 'findById').resolves(inputCarId);

    // Act
    const service = new CarService();
    const result = await service.getById('63319d80feb9f483ee823ac5');

    // Assert
    expect(result).to.be.deep.equal(carIdOutput);

    sinon.restore();
  });

  it('Deveria lancar erro de um carro com id inexistente', async function () {
    sinon.stub(Model, 'findById').resolves(null);

    try {
      const service = new CarService();
      await service.getById('63319d80feb9f483ee823a3d');
    } catch (error) {
      expect((error as Error).message).to.be.equal('Car not found');
    }

    sinon.restore();
  });

  it('Deveria lancar erro de um carro com id invalido', async function () {
    sinon.stub(Model, 'findById').resolves(inputCarInvalidId);

    try {
      const service = new CarService();
      await service.getById('633');
    } catch (error) {
      expect((error as Error).message).to.be.equal('Invalid mongo id');
    }

    sinon.restore();
  });
});