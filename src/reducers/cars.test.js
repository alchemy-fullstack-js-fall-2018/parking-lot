import reducer from './cars';
import { REGISTER_CARS, CAR_UPDATE_CAR_SEARCH_TERM } from '../actions/cars';

describe('reducer', () => {

  const state = {
    searchTerm: 'ford',
    abcd1234: {
      make: 'ford',
      model: 'pinto',
      plate: 'abcd1234'
    }
  };
  it('returns the initial state', () => {
    const newState = reducer(state, {});
    expect(newState).toEqual(state);
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

    const newState = reducer({}, action);
    expect(Object.values(newState)).toContainEqual(car);
  });

  it('handles a CAR_UPDATE_CAR_SEARCH_TERM and updates search term in state', () => {
    const newState = reducer(state, {
      type: CAR_UPDATE_CAR_SEARCH_TERM,
      payload: 'ford'
    });
    expect(newState).toEqual({ ...state, searchTerm: 'ford' });
  });
});
