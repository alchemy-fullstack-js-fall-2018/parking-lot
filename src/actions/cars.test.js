import {
  REGISTER_CARS,
  registerCars,
  CAR_UPDATE_CAR_SEARCH_TERM,
  updateCarSearchTerm
} from './cars';

describe('car actions', () => {

  it('creates an action to add a car to cars list', () => {
    expect(registerCars('ford', 'pinto', 'abcd1234')).toEqual({
      type: REGISTER_CARS,
      payload: {
        make: 'ford',
        model: 'pinto',
        plate: 'abcd1234'
      }
    });
  });

  it('creates an action to update the cars search term', () => {
    expect(updateCarSearchTerm('ford')).toEqual({
      type: CAR_UPDATE_CAR_SEARCH_TERM,
      payload: 'ford'
    });
  });
});
