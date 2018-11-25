export const getLotStatus = (state, plate) => {
  const allCarsInLot = state.lot.carsInLot;
  if(allCarsInLot[plate]) {
    return true;
  } else {
    return false;
  }
};

export const getLotCars = state => {
  return Object.keys(state.lot.carsInLot).map(plate => ({
    plate,
    ...state.lot.carsInLot[plate]
  }));
};
