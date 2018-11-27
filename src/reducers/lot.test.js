import reducer from './lot';
import fakeLot from '../fixtures/fakeLot';
import { LOT_CAR_ARRIVED, LOT_CAR_DEPARTED, LOT_UPDATE_SEARCH_TERM } from '../actions/lot';

describe('lot reducer', () => {
  it('adds car to lot', () => {
    const newCar = { make: 'Subaru', model: 'Legacy', plate: 'ZYX098' };
    const updatedState = reducer(fakeLot, { type: LOT_CAR_ARRIVED, payload: newCar });
    expect(Object.values(updatedState)).toHaveLength(4);
  });

  it('removes car from lot', () => {
    const departingCar = { plate: 'ABC123' };
    const updatedState = reducer({ carsInLot: fakeLot }, { type: LOT_CAR_DEPARTED, payload: departingCar });
    expect(Object.values(updatedState)[0].ABC123).toBeFalsy();
  });

  it('updates the searchTerm', () => {
    const searchTerm = 'ZYX987';
    const updatedState = reducer(null, { type: LOT_UPDATE_SEARCH_TERM, payload: searchTerm });
    expect(updatedState.searchTerm).toEqual(searchTerm);
  });
});
