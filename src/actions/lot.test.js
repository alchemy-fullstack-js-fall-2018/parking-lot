import {
  LOT_UPDATE_CAR_SEARCH_TERM,
  updateLotSearchTerm,
  LOT_CAR_ARRIVED,
  addToLot,
  LOT_CAR_DEPARTED,
  removeFromLot
} from './lot';

describe('lot actions', () => {
  const fakeCar = {
    make: 'Ford',
    model: 'Ranger',
    plate: 'sc4mp1'
  };

  it('creates an action to update the search term', () => {
    expect(updateLotSearchTerm('subaru')).toEqual({
      type: LOT_UPDATE_CAR_SEARCH_TERM,
      payload: 'subaru'
    });
  });

  it('creates an action to add a car to the lot', () => {
    expect(addToLot(fakeCar.plate)).toEqual({
      type: LOT_CAR_ARRIVED,
      payload: fakeCar.plate
    });
  });

  it('creates an action to remove a car from the lot', () => {
    expect(removeFromLot(fakeCar.plate)).toEqual({
      type: LOT_CAR_DEPARTED,
      payload: fakeCar.plate
    });
  });
});
