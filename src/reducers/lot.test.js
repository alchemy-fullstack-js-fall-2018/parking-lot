import reducer from './lot';
import { UPDATE_LOT_SEARCH_TERM, LOT_CAR_ARRIVED, LOT_CAR_DEPARTED } from '../actions/lot';

describe('lot reducer', () => {

  const state = {
    searchTerm: '',
    list: ['ABC123', 'DEF456']
  };

  it('returns an initial state', () => {
    const newState = reducer(state, {});
    expect(newState).toEqual(state);
  });

  it('updates the search term', () => {
    const newState = reducer (state, {
      type: UPDATE_LOT_SEARCH_TERM,
      payload: 'ford'
    });
    expect(newState).toEqual({ ...state, searchTerm: 'ford' });
  });

  it('adds a plate', () => {
    const newState = reducer (state, {
      type: LOT_CAR_ARRIVED,
      payload: 'LOL655'
    });
    expect(newState).toEqual({
      searchTerm: '',
      list: ['ABC123', 'DEF456', 'LOL655']
    });
  });

  it('removes a plate from state', () => {
    const newState = reducer (state, {
      type: LOT_CAR_DEPARTED,
      payload: 'ABC123'
    });
    expect(newState).toEqual({
      searchTerm: '',
      list: ['DEF456']
    });
  });

  it('does not remove a plate not in list', () => {
    const newState = reducer (state, {
      type: LOT_CAR_DEPARTED,
      payload: 'QQXD45'
    });
    expect(newState).toEqual(state);
  });

});
