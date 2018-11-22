export const REGISTER_CAR = 'REGISTER_CAR';
export const registerCar = car => ({
  type: REGISTER_CAR,
  payload: car
});

export const CAR_UPDATE_SEARCH_TERM = 'CAR_UPDATE_SEARCH_TERM';
export const updateCarSearchTerm = searchTerm => ({
  type: CAR_UPDATE_SEARCH_TERM,
  payload: searchTerm
});
