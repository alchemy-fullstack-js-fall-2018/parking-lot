import {
  registerCar,
  REGISTER_CAR,
  carUpdateSearchTerm,
  CAR_UPDATE_SEARCH_TERM } from './cars';

describe('register car action creators', () => {

  it('creates a type and payload when registering car', () => {
    const newCar = { make: 'Subaru', model: 'Legacy', plate: 'ZYX098' };
    const { make, model, plate } = newCar;
    const action = registerCar(make, model, plate);
    expect(action.type).toEqual(REGISTER_CAR);
    expect(action.payload).toEqual(newCar);
  });

  it('creates a type and payload when updating searchterm', () => {
    const searchTerm = 'ABC123';
    const action = carUpdateSearchTerm(searchTerm);
    expect(action.type).toEqual(CAR_UPDATE_SEARCH_TERM);
    expect(action.payload).toEqual(searchTerm);
  });
});
