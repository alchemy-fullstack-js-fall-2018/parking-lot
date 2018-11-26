import { getLotCars } from './lot';

describe('lot selectors', () => {
  const state = {
    cars: {
      searchTerm: '',
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
        },
        scr4nt0n: {
          make: 'Chrysler',
          model: 'Sebring',
          plate: 'scr4nt0n'
        },
        xyz123: {
          make: 'Toyota',
          model: 'Camry',
          plate: 'xyz123'
        }
      }
    },
    lot: {
      searchTerm: '',
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

  it('gets all the lot cars from state', () => {
    const allCars = getLotCars(state);
    [
      { make: 'Ford', model: 'Pinto', plate: 'abc1234' },
      { make: 'Honda', model: 'Civic', plate: 'def5678' },
      { make: 'Subaru', model: 'Outback', plate: 'ham4040' }
    ].forEach(car => {
      expect(allCars).toContainEqual(car);
    });
  });
});
