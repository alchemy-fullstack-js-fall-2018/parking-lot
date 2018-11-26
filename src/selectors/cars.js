export const getCars = state => {
  return Object.values(state.cars.list);
};

export const getCar = (state, plate) => {
  return {
    plate,
    ...state.cars.list[plate]
  };
};

export const getCarsBySearch = state => {
  return //lookup the dry cleaning lab
};