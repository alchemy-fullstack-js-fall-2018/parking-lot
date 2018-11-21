export const REGISTER_CARS = 'REGISTER_CARS';

export const registerCars = (make, model, plate) => {
  return {
    type: REGISTER_CARS,
    payload: {
      make,
      model,
      plate,
    }
  };
};
