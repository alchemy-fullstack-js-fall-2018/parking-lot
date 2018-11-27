export const LOT_UPDATE_CAR_SEARCH_TERM = 'LOT_UPDATE_CAR_SEARCH_TERM';
export const updateLotSearchTerm = searchTerm => ({
  type: LOT_UPDATE_CAR_SEARCH_TERM,
  payload: searchTerm
});

export const LOT_CAR_ARRIVED = 'LOT_CAR_ARRIVED';
export const addToLot = plate => ({
  type: LOT_CAR_ARRIVED,
  payload: plate
});

export const LOT_CAR_DEPARTED = 'LOT_CAR_DEPARTED';
export const removeFromLot = plate => ({
  type: LOT_CAR_DEPARTED,
  payload: plate
});
