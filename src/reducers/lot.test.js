import reducer from './lot';
import { LOT_UPDATE_CAR_SEARCH_TERM,
  LOT_CAR_DEPARTED,
  LOT_CAR_ARRIVED } from '../actions/lot';

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
  });

  it('handles a LOT_CAR_ARRIVED action', () => {
    const carToAdd = { make: 'Subaru', model: 'BRAT', plate: 'brat666' };
    const newState = reducer(state, { type: LOT_CAR_ARRIVED, payload: carToAdd });
    expect(newState).toEqual({
      searchTerm: 'banana',
      list: {
        abc123: {
          make: 'Ford',
          model: 'Mustang',
          plate: 'abc123'
        },
        brat666: {
          make: 'Subaru',
          model: 'BRAT',
          plate: 'brat666'
        }
      }
    });
  });

  it('handles a LOT_CAR_DEPARTED action', () => {
    const departingCar = state.list.abc123;
    const newState = reducer(state, { type: LOT_CAR_DEPARTED, payload: departingCar });
    expect(newState).toEqual({
      searchTerm: 'banana',
      list: {}
    });
  });
});
