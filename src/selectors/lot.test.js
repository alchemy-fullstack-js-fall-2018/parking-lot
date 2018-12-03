import {
  getLotCars,
  getTotalCars,
  getSearchTerm,
  getFilteredCars,
  getCar
} from './lot';

const state = {
  lot: {
    searchTerm: 'DEF',
    list: {
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
      },
      JKL101: {
        id: 'JKL101',
        make: 'Nissan',
        model: 'Altima',
        color: 'red',
        state: 'WA'
      }
    }
  }
};

describe('cars selectors', () => {
  it('gets lot cars', () => {
    const expected = [
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
      },
      {
        id: 'JKL101',
        make: 'Nissan',
        model: 'Altima',
        color: 'red',
        state: 'WA'
      }
    ];

    expect(getLotCars(state)).toEqual(expected);
  });

  it('gets total cars', () => {
    const expected = 3;

    expect(getTotalCars(state)).toEqual(expected);
  });

  it('gets search term', () => {
    const expected = 'DEF';

    expect(getSearchTerm(state)).toEqual(expected);
  });

  it('gets filtered cars', () => {
    const expected = [
      {
        id: 'DEF456',
        make: 'Toyota',
        model: 'Camry',
        color: 'silver',
        state: 'OR'
      }
    ];

    expect(getFilteredCars(state)).toEqual(expected);
  });

  it('gets car', () => {
    const expected = {
      id: 'DEF456',
      make: 'Toyota',
      model: 'Camry',
      color: 'silver',
      state: 'OR'
    };
    expect(getCar(state, 'DEF456')).toEqual(expected);
  });
});
