import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import Motorcycle from '../../../src/Domains/Motorcycle';
import MotorcycleService from '../../../src/Services/motoService';
import { motorcycleCreate } from '../../mocks/motoMock';

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
    // const motoOutput: Motorcycle = new Motorcycle({ id: '63319d80feb9f483ee823ac5', ...motoInput });

    sinon.stub(Model, 'create').resolves(motorcycleCreate);

    const service = new MotorcycleService();
    const result = await service.create(motoInput);

    expect(result).to.be.deep.equal(motorcycleCreate);
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

  it('Testa se retorna uma moto pelo id.', async function () {
    sinon.stub(Model, 'findById').resolves(motorcycleCreate);
    const service = new MotorcycleService(); 
    const findMotorcycleById = await service.getById('63ec187034d4e12283b91900');

    expect(findMotorcycleById).to.be.deep.equal(motorcycleCreate);
  });

  it('Testa se recebe uma lista com todos as motos.', async function () {
    sinon.stub(Model, 'find').resolves([motorcycleCreate]);
    
    const service = new MotorcycleService();
    const resp = await service.getAll();

    expect(resp).to.be.deep.equal([motorcycleCreate]);
  });
  
  it('Testa se retorna uma lista vazia de motos.', async function () {
    sinon.stub(Model, 'find').resolves([]);
    
    const service = new MotorcycleService();
    const resp = await service.getAll();

    expect(resp).to.be.deep.equal([]);
  });

  afterEach(function () {
    sinon.restore();
  });
});