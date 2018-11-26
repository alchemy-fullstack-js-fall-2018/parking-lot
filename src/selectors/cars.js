export const getCars = state => {
  return Object.keys(state.cars.list).map(key => ({
    plate: key,
    ...state.cars.list[key]
  }));
};

export const getCar = (state, plate) => {
  return {
    plate,
    ...state.cars.list[plate]
  };
};

// export const getCarsBySearch = state => {
//   return //lookup the dry cleaning lab
// };