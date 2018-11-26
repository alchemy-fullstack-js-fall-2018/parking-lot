export const getLotCars = state => {
  return Object.keys(state.lot.list).map(key => ({
    plate: key,
    ...state.lot.list[key]
  }));
};

export const getLotCarsBySearch = state => {
  //also, check out the dry cleaners
};
