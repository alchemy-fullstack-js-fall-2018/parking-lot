import { registerCar, REGISTER_CAR } from './cars';

describe('register car action creators', () => {
  it('creates a type and payload', () => {

    const newCar = { make: 'Subaru', model: 'Legacy', plate: 'ZYX098' };
    const { make, model, plate } = newCar;
    const action = registerCar(make, model, plate);

    expect(action.type).toEqual(REGISTER_CAR);
    expect(action.payload).toEqual(newCar);
  });
});
