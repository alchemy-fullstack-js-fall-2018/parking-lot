import { getCars,
  getLotSearchTerm,
  isInLot,
  getLotUse,
  getFilteredCars } from './lot';

describe('lot selector', () => {
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

  it('gets cars in the lot from state', () => {
    const result = getCars(state);
    expect(result).toEqual([
      { plate: 'ABC123', make: 'Honda', model: 'Civic', color: 'silver', isInLot: true, lotUseCount: 1 },
      { plate: 'YCU411', make: 'Toyota', model: 'Prius', color: 'red', isInLot: true, lotUseCount: 2 }
    ]);
  });

  it('reports whether or not a car is in the lot', () => {
    let result = isInLot(state, 'ABC123');
    expect(result).toBeTruthy;
    result = isInLot(state, 'ZZZ000');
    expect(result).toBeFalsy;
  });

  it('reports the number of times a car has used the lot', () => {
    const result = getLotUse(state, 'YCU411');
    expect(result).toEqual(2);
  });

  it('gets the lot search term', () => {
    const result = getLotSearchTerm(state);
    expect(result).toEqual('honda');
  });

  it('gets cars in the lot that match the search term', () => {
    const result = getFilteredCars(state);
    expect(result).toEqual([
      { plate: 'ABC123', make: 'Honda', model: 'Civic', color: 'silver', isInLot: true, lotUseCount: 1 }
    ]);
  });

});
