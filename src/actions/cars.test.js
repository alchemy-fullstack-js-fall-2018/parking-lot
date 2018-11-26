import {
  REGISTER_CAR,
  registerCar,
  CAR_UPDATE_SEARCH_TERM,
  updateCarSearchTerm
} from './cars';

const fakeCar = {
  make: 'Chrysler',
  model: 'Sebring',
  plate: 'bstbosevr'
};

describe('cars actions', () => {
  it('creates an action to register a car', () => {
    expect(registerCar('subaru', 'outback', 'asdf1234')).toEqual({
      type: REGISTER_CAR,
      payload: {
        make: 'subaru',
        model: 'outback',
        plate: 'asdf1234'
      }
    });
  });

  it('creates an action to update the search term', () => {
    expect(updateCarSearchTerm('subaru')).toEqual({
      type: CAR_UPDATE_SEARCH_TERM,
      payload: 'subaru'
    });
  });
});
