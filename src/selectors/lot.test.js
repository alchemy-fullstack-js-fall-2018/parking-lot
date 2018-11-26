import { getCars,
  getLotSearchTerm,
  isInLot,
  getLotUse,
  getFilteredCars } from './lot';

describe('lot selector', () => {

  const state = {
    cars: {
      searchTerm: 'ford',
      list: {
        abcd1234: {
          make: 'ford',
          model: 'pinto',
          plate: 'abcd1234'
        },
        defg5678: {
          make: 'chrysler',
          model: 'pt cruiser',
          plate: 'defg5678'
        }
      }
    },
    lot: {
      searchTerm: 'ford',
      list: ['abcd1234', 'defg5678']
    },
    lotUse: {
      'abcd1234': 1,
      'defg5678': 2
    }
  };


  it('gets cars in the lot from state', () => {
    const result = getCars(state);
    expect(result).toEqual([
      { plate: 'abcd1234', make: 'ford', model: 'pinto', isInLot: true, lotUseCount: 1 },
      { plate: 'defg5678', make: 'chrysler', model: 'pt cruiser', isInLot: true, lotUseCount: 2 }
    ]);
  });

  it('shows if a car is in the lot', () => {
    let result = isInLot(state, 'defg5678');
    expect(result).toBeTrue;
    result = isInLot(state, '123abf');
    expect(result).toBeFalse;
  });

  it('shows the number of times a car has been in the lot', () => {
    const result = getLotUse(state, 'defg5678');
    expect(result).toEqual(2);
  });

  it('gets the lot search term', () => {
    const result = getLotSearchTerm(state);
    expect(result).toEqual('ford');
  });

  it('gets cars in the lot the search term matches', () => {
    const result = getFilteredCars(state);
    expect(result).toEqual([
      { plate: 'abcd1234', make: 'ford', model: 'pinto', isInLot: true, lotUseCount: 1 }
    ]);
  });

});
