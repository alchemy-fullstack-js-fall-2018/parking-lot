import {
  updateCarsSearchTerm,
  UPDATE_CARS_SEARCH_TERM,
  registerCar,
  REGISTER_CAR
} from './cars';

describe('cars actions', () => {
  it('creates an action to update the cars search term', () => {
    expect(updateCarsSearchTerm('civic')).toEqual({
      type: UPDATE_CARS_SEARCH_TERM,
      payload: 'civic'
    });
  });

  it('creates an action to register a car', () => {
    const car = { key: 'value' };
    expect(registerCar(car)).toEqual({
      type: REGISTER_CAR,
      payload: car
    });
  });

});
