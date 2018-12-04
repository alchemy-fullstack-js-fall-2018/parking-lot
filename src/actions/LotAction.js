export const LOT_UPDATE_CAR_SEARCH_TERM = 'LOT_UPDATE_CAR_SEARCH_TERM';
export const lotUpdateCarSearchTerm = searchTerm => ({
  type: LOT_UPDATE_CAR_SEARCH_TERM,
  payload: searchTerm
});

export const LOT_CAR_ARRIVED = 'LOT_CAR_ARRIVED';
export const lotCarArrived = ( car ) => ({
  type: LOT_CAR_ARRIVED,
  payload: car
});

export const LOT_CAR_DEPARTED = 'LOT_CAR_DEPARTED';
export const lotCarDeparted = ( plate ) => ({
  type: LOT_CAR_DEPARTED,
  payload: plate
});
