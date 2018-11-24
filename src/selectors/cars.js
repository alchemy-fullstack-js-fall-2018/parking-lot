export const getCars = state => {
  return Object.keys(state.cars.list).map(key => ({
    plate: key,
    ...state.cars.list[key]
  }));
};

export const getCar = (state, key) =>  {
  return {
    plate: key,
    ...state.cars.list[key]
  };
};

export const getCarsSearchTerm = state => {
  return state.cars.searchTerm;
};

export const getFilteredCars = state => {
  const searchTerm = getCarsSearchTerm(state);
  return getCars(state).filter(cars => {
    return cars.make.toUpperCase().includes(searchTerm) ||
      cars.model.toUpperCase().includes(searchTerm) ||
      cars.plate.toUpperCase().includes(searchTerm);
  });
};
