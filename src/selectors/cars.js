export const getCars = state => {
  console.log(state.cars.list);
  return Object.keys(state.cars.list).map(key => ({
    key,
    ...state.cars.list[key]
  }));
};
