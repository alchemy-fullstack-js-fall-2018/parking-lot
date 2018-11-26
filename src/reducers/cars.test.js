import reducer from './cars';
import { REGISTER_CAR, CAR_UPDATE_SEARCH_TERM } from '../actions/cars';

describe('car reducer', () => {
  const state = {
    searchTerm: 'subaru',
    fakePlate: {
      make: 'subaru',
      model: 'brat',
      plate: 'fakePlate'
    }
  };

  it('returns initial state', () => {
    const newState = reducer(state, {});
    expect(newState).toEqual(state);
  });

  it('accepts REGISTER_CAR actions', () => {
    const newCar = {
      make: 'ford',
      model: 'ranger',
      plate: 'dwigtrox'
    };

    const action = { type: REGISTER_CAR, payload: newCar };

    const newState = reducer(state, action);
    expect(newState.list['dwigtrox']).toEqual(newCar);
  });

  it('handles CAR_UPDATE_SEARCH_TERM', () => {
    const newState = reducer(state, {
      type: CAR_UPDATE_SEARCH_TERM,
      payload: 'hyundai'
    });
    expect(newState).toEqual({ ...state, searchTerm: 'hyundai' });
  })
});
