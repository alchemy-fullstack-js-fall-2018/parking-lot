export const getCars = state => {
  return Object.keys(state.cars.list).map(key => ({
    plate: key,
    ...state.cars.list[key]
  }));
};

export const getCar = (state, plate) => {
  return {
    plate,
    ...state.cars.list[plate]
  };
};

export const getCarSearchTerm = state => {
  return state.cars.searchTerm;
}

export const getCarsBySearch = state => {
  const searchTerm = getCarSearchTerm(state);
  return getCars(state).filter(car => {
    return car.make.includes(searchTerm) ||
    car.model.includes(searchTerm) ||
    car.plate.includes(searchTerm);
  });
};
