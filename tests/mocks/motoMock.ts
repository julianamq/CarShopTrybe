import IMotorcycle from '../../src/Interfaces/IMotorcycle';

const postMotorcycle: IMotorcycle = {
  model: 'Kawasaki',
  year: 2010,
  color: 'Prata',
  status: true,
  buyValue: 80.000,
  category: 'Street',
  engineCapacity: 1000,
};

const motorcycleCreate: IMotorcycle = {
  id: '63ec187034d4e12283b91900',
  model: 'Kawasaki',
  year: 2010,
  color: 'Prata',
  status: true,
  buyValue: 80,
  category: 'Street',
  engineCapacity: 1000,
};

export {
  postMotorcycle,
  motorcycleCreate,
};