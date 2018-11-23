export const getAllCars = state => {
  return Object.keys(state.carList).map(plate => ({
    plate,
    ...state.carList[plate]
  }));
};

export const getCarSearchTerm = state => {
  return state.searchTerm;
};

export const getCarsBySearch = state => {
  const searchTerm = getCarSearchTerm(state);
  return getAllCars(state).filter(car => {
    return car.plate.includes(searchTerm);
  });
};
