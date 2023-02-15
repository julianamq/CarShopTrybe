import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import Motorcycle from '../../../src/Domains/Motorcycle';
import MotorcycleService from '../../../src/Services/motoService';

describe('Deveria criar uma Moto', function () {
  it('Deveria criar uma moto com SUCESSO', async function () {
    const motoInput: IMotorcycle = {
      model: 'BMW',
      year: 2022,
      color: 'Vermelho',
      status: true,
      buyValue: 10000000,
      category: 'Street',
      engineCapacity: 600,
    };
    const motoOutput: Motorcycle = new Motorcycle({ id: '63319d80feb9f483ee823ac5', ...motoInput });

    sinon.stub(Model, 'create').resolves(motoOutput);

    const service = new MotorcycleService();
    const result = await service.create(motoInput);

    expect(result).to.be.deep.equal(motoOutput);
  });

  it('Deveria lançar uma exceção quando a moto não existe', async function () {
    const motorcycleIncorrectInput: IMotorcycle = {
      model: 'BMW',
      year: 2022,
      color: 'Vermelho',
      status: true,
      buyValue: 10000000,
      category: 'Street',
      engineCapacity: 600,
      id: 'id que nao existe',
    };

    sinon.stub(Model, 'create').resolves({});

    try {
      const service = new MotorcycleService();
      await service.create(motorcycleIncorrectInput);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Motorcycle not found');
    }
  });

  afterEach(function () {
    sinon.restore();
  });
});