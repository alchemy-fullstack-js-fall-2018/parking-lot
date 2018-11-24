import { getCar } from './cars';

export const getCars = state => {
  return state.lot.list.map(plate => {
    return getCar(state, plate);
  });
};

export const getLotSearchTerm = state => {
  return state.lot.searchTerm;
};

export const isInLot = (state, plate) => {
  return state.lot.list.includes(plate);
};

export const getLotUse = (state, plate) => {
  return state.lotUse[plate] || 0;
};

export const getFilteredCars = state => {
  const searchTerm = getLotSearchTerm(state).toUpperCase();
  if(searchTerm === '') return getCars(state);
  return getCars(state).filter(car => {
    return car.make.toUpperCase().includes(searchTerm) ||
    car.model.toUpperCase().includes(searchTerm) ||
    car.color.toUpperCase().includes(searchTerm) ||
    car.plate.toUpperCase().includes(searchTerm);
  });
};
