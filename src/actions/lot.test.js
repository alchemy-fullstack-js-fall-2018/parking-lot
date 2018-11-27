import {
  LOT_UPDATE_CAR_SEARCH_TERM,
  updateLotSearchTerm,
  LOT_CAR_ARRIVED,
  lotCarArrived,
  LOT_CAR_DEPARTED,
  lotCarDeparted
} from './lot';

describe('lot actions', () => {
  const fakeLot = {

  }

  it('creates an action to update the search term', () => {
    expect(updateLotSearchTerm('subaru')).toEqual({
      type: LOT_UPDATE_CAR_SEARCH_TERM,
      payload: 'subaru'
    });
  });
});
