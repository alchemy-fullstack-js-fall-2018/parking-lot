import { LOT_CAR_ARRIVED, addToLot, LOT_CAR_DEPARTED, removeFromLot, LOT_UPDATE_SEARCH_TERM, lotUpdateSearchTerm } from './lot';

describe('lot actions', () => {
  it('lot arrival type and payload created', () => {
    const arrivingCar = { make: 'Subaru', model: 'Legacy', plate: 'ZYX098' };
    const { make, model, plate } = arrivingCar;
    const action = addToLot(make, model, plate);
    expect(action.type).toEqual(LOT_CAR_ARRIVED);
    expect(action.payload).toEqual(arrivingCar);
  });

  it('lot departure type and payload created', () => {
    const departingCarPlate = { plate: 'ZYX098' };
    const { plate } = departingCarPlate;
    const action = removeFromLot(plate);
    expect(action.type).toEqual(LOT_CAR_DEPARTED);
    expect(action.payload).toEqual(departingCarPlate);
  });

  it('update search term payload and type created', () => {
    const searchTerm = 'ABC123';
    const action = lotUpdateSearchTerm(searchTerm);
    expect(action.type).toEqual(LOT_UPDATE_SEARCH_TERM);
    expect(action.payload).toEqual(searchTerm);
  });
});
