import reducer from './lotUse';
import { LOT_CAR_ARRIVED } from '../actions/lot';

describe('lotUse reducers', () => {

  const state = {
    'ABC123': 1,
    'YCU411': 2,
    'QED314': 1
  };

  it('returns an initial state', () => {
    const newState = reducer(state, {});
    expect(newState).toEqual(state);
  });

  it('increments visit count for plate already in list', () => {
    const newState = reducer(state, {
      type: LOT_CAR_ARRIVED,
      payload: 'ABC123'
    });
    expect(newState).toEqual({
      'ABC123': 2,
      'YCU411': 2,
      'QED314': 1
    });
  });

  it('increments visit count for plate not in list', () => {
    const newState = reducer(state, {
      type: LOT_CAR_ARRIVED,
      payload: 'NYC123'
    });
    expect(newState).toEqual({
      'ABC123': 1,
      'YCU411': 2,
      'QED314': 1,
      'NYC123': 1
    });
  });

});
