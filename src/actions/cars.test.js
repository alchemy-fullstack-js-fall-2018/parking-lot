import {
  REGISTER_CAR,
  registerCar,
  CAR_UPDATE_CAR_SEARCH_TERM,
  carUpdateCarSearchTerm
} from './cars';

describe('cars actions', () => {
  it('can register a car', () => {
    const action = registerCar('098765');

    expect(action).toEqual({
      type: REGISTER_CAR,
      payload: '098765'
    });
  });

  it('can update car search term', () => {
    const action = carUpdateCarSearchTerm('ABC');

    expect(action).toEqual({
      type: CAR_UPDATE_CAR_SEARCH_TERM,
      payload: 'ABC'
    });
  });
});
