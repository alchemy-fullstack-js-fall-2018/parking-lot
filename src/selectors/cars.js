export const getCars = state => {
  return Object.keys(state.cars.list).map(key => ({
    ...state.cars.list[key]
  }));
};

export const getCar = (state, plate) => {
  return {
    ...state.cars.list[plate]
  };
};

export const getCarSearchTerm = state => {
  return state.cars.searchTerm;
};

export const getCarsBySearch = state => {
  const searchTerm = getCarSearchTerm(state).toLowerCase();
  return getCars(state).filter(car => {
    return car.make.toLowerCase().includes(searchTerm) ||
    car.model.toLowerCase().includes(searchTerm) ||
    car.plate.toLowerCase().includes(searchTerm);
  });
};
