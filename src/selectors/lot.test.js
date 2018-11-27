import { getLotStatus } from './lot';
import fakeLot from '../fixtures/fakeLot';


describe('lot selectors', () => {

  const state = {
    lot: {
      searchTerm: '',
      carsInLot: fakeLot
    }
  };

  it('returns true/false for a specific car being in the lot', () => {
    const plate1 = 'ABC123';
    const plate2 = 'ZYX987';
    const lotStatusTrue = getLotStatus(state, plate1);
    const lotStatusFalse = getLotStatus(state, plate2);
    expect(lotStatusTrue).toEqual(true);
    expect(lotStatusFalse).toEqual(false);
  });

});
