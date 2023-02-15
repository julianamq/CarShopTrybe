import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import Car from '../../../src/Domains/Car';
import CarService from '../../../src/Services/CarService';

describe('Deveria criar um Carro', function () {
  it('Deveria criar um carro com SUCESSO', async function () {
    const carInput: ICar = {
      model: 'Ferrari',
      year: 2022,
      color: 'Vermelho',
      status: true,
      buyValue: 10000000,
      doorsQty: 3,
      seatsQty: 2,
    };
    const carOutput: Car = new Car({ id: '63319d80feb9f483ee823ac5', ...carInput });

    sinon.stub(Model, 'create').resolves(carOutput);

    const service = new CarService();
    const result = await service.create(carInput);

    expect(result).to.be.deep.equal(carOutput);
  });

  it('Deveria lançar uma exceção quando o carro não existe', async function () {
    const wrongId: ICar = {
      model: 'Ferrari',
      year: 2022,
      color: 'Vermelho',
      status: true,
      buyValue: 10000000,
      doorsQty: 3,
      seatsQty: 2,
      id: 'id que nao existe',
    };

    sinon.stub(Model, 'create').resolves({});

    try {
      const service = new CarService();
      await service.create(wrongId);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Car not found');
    }
  });

  afterEach(function () {
    sinon.restore();
  });
});