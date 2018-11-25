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
