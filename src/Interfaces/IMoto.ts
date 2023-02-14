import IVehicle from './Ivehicle';

export default interface IMotorcycle extends IVehicle {
  category: string;
  engineCapacity: number;
}