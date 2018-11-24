import reducer from './lot';
import { UPDATE_LOT_SEARCH_TERM, LOT_CAR_ARRIVED, LOT_CAR_DEPARTED } from '../actions/lot';

describe('lot reducer', () => {

  const state = {
    searchTerm: '',
    list: ['ABC123', 'YCU411']
  };

  it('returns an initial state', () => {
    const newState = reducer(state, {});
    expect(newState).toEqual(state);
  });

  it('updates the search term in state', () => {
    const newState = reducer (state, {
      type: UPDATE_LOT_SEARCH_TERM,
      payload: 'silver'
    });
    expect(newState).toEqual({ ...state, searchTerm: 'silver' });
  });

  it('adds a plate to state', () => {
    const newState = reducer (state, {
      type: LOT_CAR_ARRIVED,
      payload: 'KQZ999'
    });
    expect(newState).toEqual({
      searchTerm: '',
      list: ['ABC123', 'YCU411', 'KQZ999']
    });
  });

  it('does not alter state when adding a plate already in list', () => {
    const newState = reducer (state, {
      type: LOT_CAR_ARRIVED,
      payload: 'ABC123'
    });
    expect(newState).toEqual(state);
  });

  it('does not alter state when removing a plate not in list', () => {
    const newState = reducer (state, {
      type: LOT_CAR_DEPARTED,
      payload: 'NYCXYZ'
    });
    expect(newState).toEqual(state);
  });

});
