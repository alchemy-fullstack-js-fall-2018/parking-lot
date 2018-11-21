import reducer from './cars';
import { REGISTER_CARS } from '../actions/cars';

describe('reducer', () => {
  it('returns the initial state', () => {
    const newState = reducer([], {});
    expect(newState).toEqual([]);
  });

  it('handles a REGISTER_CARS action', () => {
    const car = {
      make: 'Ford',
      model: 'Pinto',
      plate: 'ISUK123',
    };

    const action = {
      type: REGISTER_CARS,
      payload: car
    };

    const newState = reducer([], action);
    expect(newState).toContain(car);
  });
});
