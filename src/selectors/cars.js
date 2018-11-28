export const getCars = state => {
  return Object.values(state.cars.list);
};

export const getTotalCars = state => {
  return getCars(state).length;
};

export const getCar = (state, plate) => {
  return state.cars.list[plate];
};

export const getCarSearchTerm = state => {
  return state.cars.searchTerm;
};

export const getCarsFilter = state => {
  const searchTerm = getCarSearchTerm(state);
  return getCars(state).filter(car => {
    return car.plate.includes(searchTerm);
  });
};
