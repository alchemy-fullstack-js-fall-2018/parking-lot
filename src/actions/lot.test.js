import {
  updateLotSearchTerm,
  UPDATE_LOT_SEARCH_TERM,
  lotCarArrived,
  LOT_CAR_ARRIVED,
  lotCarDeparted,
  LOT_CAR_DEPARTED
} from './lot';

describe('lot actions', () => {
  it('creates an action to update the lot search term', () => {
    expect(updateLotSearchTerm('ford')).toEqual({
      type: UPDATE_LOT_SEARCH_TERM,
      payload: 'ford'
    });
  });

  it('creates an action to handle a car arriving in the lot', () => {
    const car = { key: 'value' };
    expect(lotCarArrived(car)).toEqual({
      type: LOT_CAR_ARRIVED,
      payload: car
    });
  });

  it('creates an action to handle a car departing from the lot', () => {
    const car = { key: 'value' };
    expect(lotCarDeparted(car)).toEqual({
      type: LOT_CAR_DEPARTED,
      payload: car
    });
  });

});
