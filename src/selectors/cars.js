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
  const searchTerm = getCarsSearchTerm(state).toUpperCase();
  if(searchTerm === '') return getCars(state);
  return getCars(state).filter(car => {
    return car.make.toUpperCase().includes(searchTerm) ||
    car.model.toUpperCase().includes(searchTerm) ||
    car.color.toUpperCase().includes(searchTerm) ||
    car.plate.toUpperCase().includes(searchTerm);
  });
};
