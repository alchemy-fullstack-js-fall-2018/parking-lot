export const getLotCars = state => {
  return Object.keys(state.lot.carsInLot).map(plate => ({
    plate,
    ...state.lot.carsInLot[plate]
  }));
};


export const getLotCarsBySearch = state => {
  return state.lot.searchTerm;
};
