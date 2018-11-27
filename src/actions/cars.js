export const CAR_UPDATE_CAR_SEARCH_TERM = 'CAR_UPDATE_CAR_SEARCH_TERM';
export const carUpdateCarSearchTerm = searchTerm => ({
  type: CAR_UPDATE_CAR_SEARCH_TERM,
  payload: searchTerm
});

export const REGISTER_CAR = 'REGISTER_CAR';
export const registerCar = car => ({
  type: REGISTER_CAR,
  payload: car
});

export const LOT_CAR_ARRIVED = 'LOT_CAR_ARRIVED';
export const lotCarArrived = id => ({
  type: LOT_CAR_ARRIVED,
  payload: id
});
