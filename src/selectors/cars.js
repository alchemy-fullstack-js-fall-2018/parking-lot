export const getCars = state => {
  return Object.keys(state.cars.carList).map(id => ({
    id,
    ...state.cars.carList[id]
  }));
}

export const getCarsBySearch = state => {
  return state.cars.searchTerm;
}

export const getCar = (state, id) => {
  return state.cars.carList[id];
}
