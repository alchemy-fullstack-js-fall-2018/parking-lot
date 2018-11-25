export const getLotStatus = (state, plate) => {
  console.log(state.lot.carsInLot);
  const allCarsInLot = state.lot.carsInLot;
  if(allCarsInLot[plate]) {
    return true;
  } else {
    return false;
  }
};
