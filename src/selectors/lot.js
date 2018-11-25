export const getLotStatus = (state, plate) => {
  const allCarsInLot = state.lot.carsInLot;
  return allCarsInLot.includes(plate);
};
