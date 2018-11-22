import { getAllCars } from './cars';
import fakeCars from '../fixtures/fakeCars';

describe('cars selectors', () => {

  const state = {
    searchTerm: '',
    carList: fakeCars
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
});
