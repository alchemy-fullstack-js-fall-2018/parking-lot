export const getLotStatus = (state, plate) => {
  const allCarsInLot = state.lot.carsInLot;
  if(allCarsInLot[plate]) {
    return true;
  } else {
    return false;
  }
};
