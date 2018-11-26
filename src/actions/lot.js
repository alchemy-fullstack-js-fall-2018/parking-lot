export const UPDATE_LOT_SEARCH_TERM = 'UPDATE_LOT_SEARCH_TERM';
export const updateLotSearchTerm = searchTerm => ({
  type: UPDATE_LOT_SEARCH_TERM,
  payload: searchTerm
});

export const LOT_CAR_ARRIVED = 'LOT_CAR_ARRIVED';
export const lotCarArrived = plate => ({
  type: LOT_CAR_ARRIVED,
  payload: plate
});

export const LOT_CAR_DEPARTED = 'LOT_CAR_DEPARTED';
export const lotCarDeparted = plate => ({
  type: LOT_CAR_DEPARTED,
  payload: plate
});

