export const REGISTER_CAR = 'REGISTER_CAR';
export const registerCar = ( make, model, plate ) => {
  return {
    type: REGISTER_CAR,
    payload: {
      make,
      model,
      plate
    }
  };
};

export const CAR_UPDATE_CAR_SEARCH_TERM = 'CAR_UPDATE_CAR_SEARCH_TERM'
export const carUpdateCarSearchTerm = searchTerm => ({
  type: CAR_UPDATE_CAR_SEARCH_TERM,
  payload: searchTerm
});
