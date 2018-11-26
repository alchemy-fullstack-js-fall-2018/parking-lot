import reducer from './lot';
import { LOT_UPDATE_CAR_SEARCH_TERM } from '../actions/lot';

describe('lot reducers', () => {
  const state = {
    searchTerm: 'banana',
    list: {
      abc123: {
        make: 'Ford',
        model: 'Mustang',
        plate: 'abc123'
      }
    }
  };

  it('returns initial state', () => {
    const newState = reducer(state, {});
    expect(newState).toEqual(state);
  });

  it('handles a LOT_UPDATE_CAR_SEARCH_TERM action', () => {
    const newState = reducer(state, {
      type: LOT_UPDATE_CAR_SEARCH_TERM,
      payload: 'hyundai'
    });
    expect(newState).toEqual({ ...state, searchTerm: 'hyundai' });
  })
});
