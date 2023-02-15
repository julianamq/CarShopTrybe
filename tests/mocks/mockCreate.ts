import ICar from '../../src/Interfaces/ICar';

const createCar: ICar = {
  model: 'Pagani',
  year: 2008,
  color: 'Prata',
  status: true,
  buyValue: 350.000,
  doorsQty: 2,
  seatsQty: 5,
};
const carCreateById: ICar = {
  id: '63ebe15955fc2bf9c485eaaf',
  model: 'Pagani',
  year: 2008,
  color: 'Prata',
  status: true,
  buyValue: 350,
  doorsQty: 2,
  seatsQty: 5,
};

export {
  createCar,
  carCreateById,
};