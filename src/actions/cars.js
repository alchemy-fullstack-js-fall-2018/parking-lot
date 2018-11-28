export const UPDATE_CARS_SEARCH_TERM = 'UPDATE_CARS_SEARCH_TERM';
export const updateCarsSearchTerm = searchTerm => ({
  type: UPDATE_CARS_SEARCH_TERM,
  payload: searchTerm
});

export const REGISTER_CAR = 'REGISTER_CAR';
export const registerCar = (plate, make, model) => {
  return {
    type: REGISTER_CAR,
    payload: {
      plate,
      make,
      model
    }
  };
};
