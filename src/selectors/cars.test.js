import { getCars, getCarsSearchTerm, getFilteredCars } from './cars';

describe('clothes selectors', () => {
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
    }
  };

  it('gets all cars from state', () => {
    const allCars = getCars(state);
    [
      { make: 'ford', model: 'pinto', plate: 'abcd1234' },
      { make: 'chrysler', model: 'pt cruiser', plate: 'defg5678' }
    ].forEach(car => {
      expect(allCars).toContainEqual(car);
    });
  });

  it('gets search term from state', () => {
    expect(getCarsSearchTerm(state)).toEqual('ford');
  });

  describe('gets filtered cars', () => {
    it('gets cars filtered by make', () => {
      expect(getFilteredCars(state)).toEqual([
        { make: 'ford', model: 'pinto', plate: 'abcd1234' }
      ]);
    });

    it('gets cars filtered by model', () => {
      const modelState = {
        cars: { ...state.cars, searchTerm: 'chrysler' }
      };
      expect(getFilteredCars(modelState)).toEqual([
        { make: 'chrysler', model: 'pt cruiser', plate: 'defg5678' }
      ]);
    });

    it('gets filtere cars by plate', () => {
      const plateState = {
        cars: { ...state.cars, searchTerm: '12' }
      };
      expect(getFilteredCars(plateState)).toEqual([
        { make: 'ford', model: 'pinto', plate: 'abcd1234' }
      ]);
    });
  });
});

