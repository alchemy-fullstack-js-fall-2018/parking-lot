import {
  getCars,
  getTotalCars,
  getSearchTerm,
  getFilteredCars,
  getCar,
  getLotUse
} from './cars';

const state = {
  cars: {
    searchTerm: 'ABC',
    list: {
      ABC123: {
        id: 'ABC123',
        make: 'Honda',
        model: 'Accord',
        color: 'white',
        state: 'OR'
      },
      DEF456: {
        id: 'DEF456',
        make: 'Toyota',
        model: 'Camry',
        color: 'silver',
        state: 'OR'
      },
      GHI789: {
        id: 'GHI789',
        make: 'Hyundai',
        model: 'Elantra',
        color: 'blue',
        state: 'WA'
      }
    }
  },
  lotUse: {
    ABC123: 5,
    DEF456: 12,
    GHI789: 3,
    JKL101: 21
  }
};

describe('cars selectors', () => {
  it('gets cars', () => {
    const expected = [
      {
        id: 'ABC123',
        make: 'Honda',
        model: 'Accord',
        color: 'white',
        state: 'OR'
      },
      {
        id: 'DEF456',
        make: 'Toyota',
        model: 'Camry',
        color: 'silver',
        state: 'OR'
      },
      {
        id: 'GHI789',
        make: 'Hyundai',
        model: 'Elantra',
        color: 'blue',
        state: 'WA'
      }
    ];

    expect(getCars(state)).toEqual(expected);
  });

  it('gets total cars', () => {
    const expected = 3;

    expect(getTotalCars(state)).toEqual(expected);
  });

  it('gets search term', () => {
    const expected = 'ABC';

    expect(getSearchTerm(state)).toEqual(expected);
  });

  it('gets filtered cars', () => {
    const expected = [
      {
        id: 'ABC123',
        make: 'Honda',
        model: 'Accord',
        color: 'white',
        state: 'OR'
      }
    ];

    expect(getFilteredCars(state)).toEqual(expected);
  });

  it('gets car', () => {
    const expected = {
      id: 'ABC123',
      make: 'Honda',
      model: 'Accord',
      color: 'white',
      state: 'OR'
    };
    expect(getCar(state, 'ABC123')).toEqual(expected);
  });

  it('gets lot use', () => {
    const expected = 5;

    expect(getLotUse(state, 'ABC123')).toEqual(expected);
  });
});
