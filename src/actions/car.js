const REGISTER_CAR = 'REGISTER_CAR';
export const registerCar = (make, model, plate) => {
  return {
    type: REGISTER_CAR,
    payload: {
      make,
      model,
      plate
    }
  };
};
