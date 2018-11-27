import reducer from './lotUse';
import { LOT_CAR_ARRIVED } from '../actions/lot';

describe('lot use reducer', () => {
  const state = {
    def5678: 1,
    scr4nt0n: 3,
    xyz123: 6
  };

  it('returns the initial state', () => {
    const newState = reducer(state, {});
    expect(newState).toEqual(state);
  });

  it('increments the useCount of a previously used car', () => {
    const newState = reducer(state, { type: LOT_CAR_ARRIVED, payload: 'def5678' });
    expect(newState).toEqual({
      def5678: 2,
      scr4nt0n: 3,
      xyz123: 6
    });
  });
});
