export const REGISTER_CARS = 'REGISTER_CARS';
export const CAR_UPDATE_CAR_SEARCH_TERM = 'CAR_UPDATE_CAR_SEARCH_TERM';

export const registerCars = (plate, make, model) => {
  return {
    type: REGISTER_CARS,
    payload: { plate, make, model }
  };
};

export const updateCarSearchTerm = searchTerm => {
  return {
    type: CAR_UPDATE_CAR_SEARCH_TERM,
    payload: searchTerm
  };
};
