import {
  LOT_CAR_ARRIVED,
  lotCarArrived,
  LOT_CAR_DEPARTED,
  lotCarDeparted,
  LOT_UPDATE_CAR_SEARCH_TERM,
  lotUpdateCarSearchTerm
} from './lot';

describe('lot actions', () => {
  it('adds a car to lot', () => {
    const car = {
      ABC123: {
        id: 'ABC123',
        make: 'Honda',
        model: 'Accord',
        color: 'white',
        state: 'OR'
      }
    };

    const action = lotCarArrived(car);

    expect(action).toEqual({
      type: LOT_CAR_ARRIVED,
      payload: car
    });
  });

  it('removes a car from lot', () => {
    const car = {
      ABC123: {
        id: 'ABC123',
        make: 'Honda',
        model: 'Accord',
        color: 'white',
        state: 'OR'
      }
    };

    const action = lotCarDeparted(car);

    expect(action).toEqual({
      type: LOT_CAR_DEPARTED,
      payload: car
    });
  });

  it('searches for cars in lot', () => {
    const action = lotUpdateCarSearchTerm('ABC');

    expect(action).toEqual({
      type: LOT_UPDATE_CAR_SEARCH_TERM,
      payload: 'ABC'
    });
  });
});
