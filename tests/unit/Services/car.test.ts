import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import { createCar, carCreateById } from '../../mocks/mockCreate';

const INVALID_MONGO_ID = 'Invalid mongo id';
const CAR_NOT_FOUND = 'Car not found';

describe('Testando a camada service de Car.', function () {
  it('Cria um carro.', async function () {
    sinon.stub(Model, 'create').resolves(carCreateById);

    const service = new CarService(); 
    const createCarSucess = await service.create(createCar);

    expect(createCarSucess).to.be.deep.equal(carCreateById);
  });
  
  it('Testa se retorna um carro pelo id.', async function () {
    sinon.stub(Model, 'findById').resolves(carCreateById);

    const service = new CarService(); 
    const findCarById = await service.getById('63ebe15955fc2bf9c485eaaf');

    expect(findCarById).to.be.deep.equal(carCreateById);
  });

  it('Testando o update.', async function () {
    const service = new CarService(); 
    const resp = sinon.stub(Model, 'updateOne').resolves();

    await service.update('63ebe15955fc2bf9c485eaaf', carCreateById);

    expect(resp.calledOnce).to.equal(true);
  });

  it('Testa se lança uma excessão quando recebe um id inválido.', async function () {
    sinon.stub(Model, 'create').resolves({});
    
    try {
      const service = new CarService(); 
      await service.create(createCar);
    } catch (err) {
      expect((err as Error).message).to.be.equal(INVALID_MONGO_ID);
    }
  });

  it('Testa se recebe uma lista com todos os carros.', async function () {
    sinon.stub(Model, 'find').resolves([carCreateById]);
    
    const service = new CarService();
    const resp = await service.getAll();

    expect(resp).to.be.deep.equal([carCreateById]);
  });

  it('Testa se lança uma excessão quando o carro não é encontrado por id.', async function () {
    sinon.stub(Model, 'findById').resolves(null);
    
    try {
      const service = new CarService(); 
      await service.getById('63ebe15955fc2bf9c485eaaf');
    } catch (err) {
      expect((err as Error).message).to.be.equal(CAR_NOT_FOUND);
    }
  });

  it('Testa se lança uma excessão ao fazer update.', async function () {
    sinon.stub(Model, 'updateOne').resolves(undefined);
    
    try {
      const service = new CarService(); 
      await service.update('63ebe15955fc2bf9c485eaaf', carCreateById);
    } catch (err) {
      expect((err as Error).message).to.be.equal(CAR_NOT_FOUND);
    }
  });

  it('Testa se retorna uma lista vazia de carros.', async function () {
    sinon.stub(Model, 'find').resolves([]);
    
    const service = new CarService();
    const resp = await service.getAll();

    expect(resp).to.be.deep.equal([]);
  });

  it('Testa se lança uma excessão quando recebe um id inválido na busca.', async function () {
    sinon.stub(Model, 'findById').resolves({});
    
    try {
      const service = new CarService(); 
      await service.getById('123');
    } catch (err) {
      expect((err as Error).message).to.be.equal(INVALID_MONGO_ID);
    }
  });

  it('Testa se lança uma excessão quando recebe um id inválido na criação.', async function () {
    sinon.stub(Model, 'create').resolves({});
    
    try {
      const service = new CarService(); 
      await service.create({ ...createCar, id: '123' });
    } catch (err) {
      expect((err as Error).message).to.be.equal(INVALID_MONGO_ID);
    }
  });
  
  afterEach(function () {
    sinon.restore();
  });
});