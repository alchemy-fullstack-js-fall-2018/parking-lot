export const LOT_CAR_ARRIVED = 'LOT_CAR_ARRIVED';
export const addToLot = (make, model, plate) => {
  return {
    type: LOT_CAR_ARRIVED,
    payload: {
      make,
      model,
      plate }
  };
};

export const LOT_CAR_DEPARTED = 'LOT_CAR_DEPARTED';
export const removeFromLot = plate => {
  return {
    type: LOT_CAR_DEPARTED,
    payload: { plate }
  };
};

export const LOT_UPDATE_SEARCH_TERM = 'LOT_UPDATE_SEARCH_TERM';
export const lotUpdateSearchTerm = searchTerm => ({
  type: LOT_UPDATE_SEARCH_TERM,
  payload: searchTerm
});
