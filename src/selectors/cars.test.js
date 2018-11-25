import { getAllCars, getCar, getCarsBySearch } from './cars';
import fakeCars from '../fixtures/fakeCars';

describe('cars selectors', () => {

  const state = {
    cars: {
      searchTerm: 'BCD234',
      carList: fakeCars
    }
  };

  it('gets all cars from state', () => {
    const allCars = getAllCars(state);
    expect(allCars).toEqual([
      { 'make': 'Toyota', 'model': 'Corolla', 'plate': 'ABC123' },
      { 'make': 'Honda', 'model': 'Fit', 'plate': 'BCD234' },
      { 'make': 'Buick', 'model': 'Skylark', 'plate': 'DEF345' },
      { 'make': 'BMW', 'model': 'Z3', 'plate': 'EFG456' }
    ]);
  });

  it('gets a car by search', () => {
    const searchedCar = getCarsBySearch(state);
    expect(searchedCar).toEqual([fakeCars['BCD234']]);
  });

  it('gets a specific car from state', () => {
    const plate = 'ABC123';
    const car = getCar(state, plate);
    expect(car).toEqual(fakeCars.ABC123);
  });
});
