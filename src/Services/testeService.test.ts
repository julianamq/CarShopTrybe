// import sinon from 'sinon';
// import chai from 'chai';
// import CarService from './CarService';

// describe('CarService unit tests', function () {
//   let carService;

//   beforeEach(function () {
//     carService = new CarService();
//   });
// });
// describe('CarService unit tests', function () {
//   // ...
  
//   describe('create()', function () {
//     it('should create a new car', function () {
//       // Arrange
//       const car = {
//         model: 'Toyota',
//         year: 2020,
//         color: 'white',
//         status: 'new',
//         buyValue: 15000,
//         doorsQty: 4,
//         seatsQty: 5,
//       };
  
//       const carODMStub = {
//         create: sinon.stub().resolves(car),
//       };
  
//       sinon.stub(CarODM, 'CarODM').returns(carODMStub);
  
//       // Act
//       const p = carService.create(car);
  
//       // Assert
//       return p
//         .then((result) => {
//           chai.expect(result).to.deep.equal({
//             id: null,
//             model: 'Toyota',
//             year: 2020,
//             color: 'white',
//             status: 'new',
//             buyValue: 15000,
//             doorsQty: 4,
//             seatsQty: 5,
//           });
//         });
//     });
//   });
// });
