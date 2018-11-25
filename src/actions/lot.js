export const LOT_CAR_ARRIVED = 'LOT_CAR_ARRIVED';
export const addToLot = plate => {
  return {
    type: LOT_CAR_ARRIVED,
    payload: { plate }
  };
};

export const LOT_CAR_DEPARTED = 'LOT_CAR_DEPARTED';
export const removeFromLot = plate => {
  return {
    type: LOT_CAR_DEPARTED,
    payload: { plate }
  };
};
