export const getLotCars = state => {
  return Object.keys(state.lot.list).map(id => ({
    id,
    ...state.lot.list[id]
  }));
};

export const getSearchTerm = state => {
  return state.lot.searchTerm;
};

export const getFilteredCars = state => {
  return getLotCars(state).filter(car => car.id.includes(getSearchTerm(state)));
};

export const getCar = (state, id) => {
  return {
    id: id,
    ...state.lot.list[id]
  };
};

export const getTotalCars = state => {
  return getLotCars(state).length;
};
