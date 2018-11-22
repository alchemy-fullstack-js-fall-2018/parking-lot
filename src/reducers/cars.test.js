import reducer from './cars';
import { REGISTER_CAR } from '../actions/cars';
import fakeCars from '../fixtures/fakeCars';

describe('cars reducer', () => {
  it('registers a car', () => {
    const newCar = { make: 'Subaru', model: 'Legacy', plate: 'ZYX098' };
    const updatedState = reducer(fakeCars, { type: REGISTER_CAR, payload: newCar });
    expect(Object.values(updatedState)).toHaveLength(5);
  });
});
