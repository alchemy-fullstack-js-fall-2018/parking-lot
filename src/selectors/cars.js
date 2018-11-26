import { getLotUse, isInLot } from './lot';

export const getCars = state => {
  return Object.keys(state.cars.list).map(plate => ({
    plate,
    ...state.cars.list[plate]
  }));
};

export const getCar = (state, plate) =>  {
  return {
    plate,
    ...state.cars.list[plate],
    lotUseCount: getLotUse(state, plate),
    isInLot: isInLot(state, plate)
  };
};
  
export const getCarsSearchTerm = state => {
  return state.cars.searchTerm;
};

export const getFilteredCars = state => {
  const searchTerm = getCarsSearchTerm(state);
  return getCars(state).filter(cars => {
    return cars.make.includes(searchTerm) ||
      cars.model.includes(searchTerm) ||
      cars.plate.includes(searchTerm);
  });
};
