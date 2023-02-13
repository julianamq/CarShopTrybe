// import { expect } from 'chai';
// import Mocha from 'mocha';
// import sinon from 'sinon';
// import CarsService from '../../../src/Services/CarService';

// describe('CarsService', function() {
//   let carsService: CarsService;
//   let sandbox: sinon.SinonSandbox;

//   beforeEach(() => {
//     carsService = new CarsService();
//     sandbox = sinon.createSandbox();
//   });

//   afterEach(() => {
//     sandbox.restore();
//   });
//   describe('getCar', () => {
//     it('should return a specific car by id', async () => {
//       carModelStub.findOne.returns({
//         id: '2024',
//         model: 'Marea',
//         year: 2002,
//         color: 'Black',
//         status: true,
//         buyValue: 15.99,
//         doorsQty: 4,
//         seatsQty: 5,
//       });

//       const car = await carService.getCar('2024');

//       expect(car).to.be.an('object');
//       expect(car.model).to.be.equal('Marea');
//       assert.calledOnceWith(carModelStub.findOne, {
//         id: '2024',
//       });
//     });
//   });
// });