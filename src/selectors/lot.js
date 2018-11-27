export const getLotCars = state => {
  return Object.keys(state.lot.list).map(key => ({
    plate: key,
    ...state.lot.list[key]
  }));
};

export const getLotSearchTerm = state => {
  return state.lot.searchTerm;
};

export const getLotCarsBySearch = state => {
  const searchTerm = getLotSearchTerm(state).toLowerCase();
  return getLotCars(state).filter(car => {
    return car.make.toLowerCase().includes(searchTerm) ||
    car.model.toLowerCase().includes(searchTerm) ||
    car.plate.toLowerCase().includes(searchTerm);
  });
};
