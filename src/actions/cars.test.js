import {
  REGISTER_CAR,
  registerCar
} from './cars';

const fakeCar = {
  make: 'Chrysler',
  model: 'Sebring',
  plate: 'bstbosevr'
};

describe('cars actions', () => {
  it('creates an action to register a car', () => {
    expect(registerCar('subaru', 'outback', 'asdf1234')).toEqual({
      type: REGISTER_CAR,
      payload: {
        make: 'subaru',
        model: 'outback',
        plate: 'asdf1234'
      }
    });
  });
});
