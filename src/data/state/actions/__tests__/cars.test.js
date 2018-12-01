import {
  REGISTER_CAR, registerCar,
  UPDATE_SEARCH, updateSearch
} from '../cars';
import { fakeCar } from '../../../../testing/fixtures/fakeCars';

describe('cars actions', () => {

  test('registers car', () => {
    const car = fakeCar();
    const action = registerCar(car);
    expect(action.type).toEqual(REGISTER_CAR);
    expect(action.payload).toEqual(car);
  });

  test('updates the search', () => {
    const searchTerm = 'asdf';
    const action = updateSearch(searchTerm);
    expect(action.type).toEqual(UPDATE_SEARCH);
    expect(action.payload).toEqual(searchTerm);
  });



});
