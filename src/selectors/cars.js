export const getAllCars = state => {
  return Object.keys(state.carList).map(plate => ({
    plate,
    ...state.carList[plate]
  }));
  // return [state.carList];
};
