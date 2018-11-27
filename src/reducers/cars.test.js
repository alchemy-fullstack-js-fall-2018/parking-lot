import reducer from './cars';
import { UPDATE_CARS_SEARCH_TERM, REGISTER_CAR } from '../actions/cars';

describe ('cars reducer', () => {

  const state = {
    searchTerm: 'civic',
    list: {
      'ABC123': { make: 'Honda', model: 'Civic', color: 'silver' },
      'YCU411': { make: 'Toyota', model: 'Prius', color: 'red' }
    }
  };

  it('returns an initial state', () => {
    const newState = reducer(state, {});
    expect(newState).toEqual(state);
  });

  it('updates the search term in state', () => {
    const newState = reducer (state, {
      type: UPDATE_CARS_SEARCH_TERM,
      payload: 'silver'
    });
    expect(newState).toEqual({ ...state, searchTerm: 'silver' });
  });

  it('adds a car to state', () => {
    const newState = reducer (state, {
      type: REGISTER_CAR,
      payload: { plate: 'KQZ999', make: 'Chrysler', model: 'Cordoba', color: 'brown' }
    });
    expect(newState).toEqual({
      searchTerm: 'civic',
      list: {
        'ABC123': { make: 'Honda', model: 'Civic', color: 'silver' },
        'YCU411': { make: 'Toyota', model: 'Prius', color: 'red' },
        'KQZ999': { make: 'Chrysler', model: 'Cordoba', color: 'brown' }
      }
    });
  });
});
