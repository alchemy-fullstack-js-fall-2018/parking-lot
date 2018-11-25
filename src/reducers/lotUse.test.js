import reducer from './lotUse';
import { LOT_CAR_ARRIVED } from '../actions/lot';

describe('lotUse reducers', () => {

  const state = {
    'ISUK123': 1,
    'FOOKM3': 2,
    'OLDMAN': 3
  };

  it('returns an initial state', () => {
    const newState = reducer(state, {});
    expect(newState).toEqual(state);
  });

  it('increments visit count for existing plate', () => {
    const newState = reducer(state, {
      type: LOT_CAR_ARRIVED,
      payload: 'ISUK123'
    });
    expect(newState).toEqual({
      'ISUK123': 2,
      'FOOKM3': 2,
      'OLDMAN': 3
    });
  });

  it('increments visit count for plate when added', () => {
    const newState = reducer(state, {
      type: LOT_CAR_ARRIVED,
      payload: 'LOL655'
    });
    expect(newState).toEqual({
      'ISUK123': 1,
      'FOOKM3': 2,
      'OLDMAN': 3,
      'LOL655': 1
    });
  });

});
