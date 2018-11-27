export const getLotCars = state => {
  return Object.keys(state.lot.list).map(id => ({
    id,
    ...state.lot.list[id]
  }));
};
