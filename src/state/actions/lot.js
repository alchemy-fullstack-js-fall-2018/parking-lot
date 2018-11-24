export const LOT_CAR_ARRIVED = 'LOT_CAR_ARRIVED';
export const lotCarArrived = id => ({
  type: LOT_CAR_ARRIVED,
  payload: id
});

export const LOT_CAR_DEPARTED = 'LOT_CAR_DEPARTED';
export const lotCarDeparted = id => ({
  type: LOT_CAR_DEPARTED,
  payload: id
});
