import { getCars,
  getCar,
  getCarsSearchTerm,
  getFilteredCars } from './cars';

describe('cars selector', () => {
  const state = {
    cars: {
      searchTerm: 'civic',
      list: {
        'ABC123': { make: 'Honda', model: 'Civic', color: 'silver' },
        'YCU411': { make: 'Toyota', model: 'Prius', color: 'red' },
        'QED314': { make: 'Dodge', model: 'Caravan', color: 'maroon' }
      }
    },
    lot: {
      searchTerm: 'honda',
      list: ['ABC123', 'YCU411']
    },
    lotUse: {
      'ABC123': 1,
      'YCU411': 2,
      'QED314': 1
    }
  };

  it('gets cars from state', () => {
    const result = getCars(state);
    expect(result).toEqual([
      { plate: 'ABC123', make: 'Honda', model: 'Civic', color: 'silver' },
      { plate: 'YCU411', make: 'Toyota', model: 'Prius', color: 'red' },
      { plate: 'QED314', make: 'Dodge', model: 'Caravan', color: 'maroon' }
    ]);
  });

  it('gets a car from state', () => {
    const result = getCar(state, 'YCU411');
    expect(result).toEqual(
      { plate: 'YCU411',
        make: 'Toyota',
        model: 'Prius',
        color: 'red',
        lotUseCount: 2,
        isInLot: true }
    );
  });

  it('gets the cars search term', () => {
    const result = getCarsSearchTerm(state);
    expect(result).toEqual('civic');
  });

  it('gets cars that match the search term', () => {
    const result = getFilteredCars(state);
    expect(result).toEqual([
      { plate: 'ABC123', make: 'Honda', model: 'Civic', color: 'silver' }
    ]);
  });

});
