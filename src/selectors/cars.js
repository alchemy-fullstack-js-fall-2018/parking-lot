export const getCars = state => {
  return Object.keys(state.cars.carList).map(id => ({
    id,
    ...state.cars.carList[id]
  }));
}

export const getCarsBySearch = state => {
  return state.cars.searchTerm;
}
