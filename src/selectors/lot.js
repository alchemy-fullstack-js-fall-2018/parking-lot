export const getLotCars = state => {
  return Object.keys(state.cars.carsInLot).map(id => ({
    id,
    ...state.cars.carsInLot[id]
  }));
};


export const getLotCarsBySearch = state => {
  return state.cars.searchTerm;
};
