import { getTimesInLot } from './lotUse';
import fakeLotUse from '../fixtures/fakeLotUse';

describe('lotUse selectors', () => {
  const state = {
    lotUse: {
      lotUse: fakeLotUse
    }
  };
  it('returns the number of times that a car has been in lot when passed a plate', () => {
    const plate = 'DEF345';
    const timesInLot = getTimesInLot(state, plate);
    expect(timesInLot).toEqual(8);
  });
});
