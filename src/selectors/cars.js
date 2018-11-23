export const getCars = state => {
  return Object.keys(state.cars.list).map(key => ({
    plate: key,
    ...state.cars.list[key]
  }));
};

export const getCar = (state, key) =>  {
  return {
    plate: key,
    ...state.cars.list[key]
  };
};
