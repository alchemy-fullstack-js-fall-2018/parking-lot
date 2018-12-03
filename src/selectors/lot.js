export const getLotCars = state => {
  return Object.keys(state.lot.carsInLot).map(plate => ({
    plate,
    ...state.lot.carsInLot[plate]
  }));
};

export const getLotCarsBySearch = state => {
  const searchTerm = getLotSearchTerm(state);
  return getLotCars(state).filter(car => {
    return car.plate.includes(searchTerm);
  });
};

export const getLotStatus = (state, plate) => {
  const allCarsInLot = state.lot.carsInLot;
  if(allCarsInLot[plate]) {
    return true;
  } else {
    return false;
  }
};

export const getLotSearchTerm = state => {
  return state.lot.searchTerm;
};
