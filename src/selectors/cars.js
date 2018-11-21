export const getCars = state => {
  const carsArray = Object.keys(state.cars.list).map(key => ({
    plate: key,
    ...state.cars.list[key]
  }));
  console.log('carsArray:', carsArray);
  return carsArray;
};
