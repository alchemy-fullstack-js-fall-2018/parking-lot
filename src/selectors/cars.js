export const getCars = state => {
  return Object.values(state.cars.list);
};

export const getTotalCars = state => {
  return getCars(state).length;
};
