import {
  REGISTER_CAR,
  registerCar
} from './cars';

describe('cars actions', () => {
  it('can register a car', () => {
    const action = registerCar('098765');

    expect(action).toEqual({
      type: REGISTER_CAR,
      payload: '098765'
    });
  });
});
