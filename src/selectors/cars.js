export const getCars = state => {
  return Object.keys(state.cars.list).map(id => ({
    id,
    ...state.cars.list[id]
  }));
};

export const getTotalCars = state => {
  return getCars(state).length;
};
