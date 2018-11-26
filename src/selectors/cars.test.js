import { getCars, getCar } from './cars';

describe('car selectors', () => {
  const state = {
    cars: {
      searchTerm: 'Toyota',
      list: {
        abc1234: {
          make: 'Ford',
          model: 'Pinto',
          plate: 'abc1234'
        },
        def5678: {
          make: 'Honda',
          model: 'Civic',
          plate: 'def5678'
        },
        ham4040: {
          make: 'Subaru',
          model: 'Outback',
          plate: 'ham4040'
        }
      }
    }
  };

  it('gets all the cars', () => {
    const allCars = getCars(state);
    [
      { make: 'Ford', model: 'Pinto', plate: 'abc1234' },
      { make: 'Honda', model: 'Civic', plate: 'def5678' },
      { make: 'Subaru', model: 'Outback', plate: 'ham4040' }
    ].forEach(car => {
      expect(allCars).toContainEqual(car);
    });
  });
});
