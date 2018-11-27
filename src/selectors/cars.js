export const getAllCars = state => {
  return Object.keys(state.cars.carList).map(plate => ({
    plate,
    ...state.cars.carList[plate]
  }));
};

export const getCarSearchTerm = state => {
  return state.cars.searchTerm;
};

export const getCarsBySearch = state => {
  const searchTerm = getCarSearchTerm(state);
  return getAllCars(state).filter(car => {
    return car.plate.includes(searchTerm);
  });
};

export const getCar = (state, plate) => {
  return state.cars.carList[plate];
};
