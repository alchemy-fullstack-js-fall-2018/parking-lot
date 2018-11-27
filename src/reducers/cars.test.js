import carsReducer from './cars';
import { CAR_UPDATE_CAR_SEARCH_TERM, REGISTER_CAR } from '../actions/cars';

describe('cars reducer', () => {
  const initialState = {
    searchTerm: 'ABC',
    list: {
      ABC123: {
        id: 'ABC123',
        make: 'Honda',
        model: 'Accord',
        color: 'white',
        state: 'OR',
      },
      DEF456: {
        id: 'DEF456',
        make: 'Toyota',
        model: 'Camry',
        color: 'silver',
        state: 'OR'
      },
      GHI789: {
        id: 'GHI789',
        make: 'Hyundai',
        model: 'Elantra',
        color: 'blue',
        state: 'WA'
      }
    }
  };

  const car = {
    id: 'JKL101',
    make: 'Nissan',
    model: 'Altima',
    color: 'red',
    state: 'WA'
  };

  it('handles the CAR_UPDATE_CAR_SEARCH_TERM action', () => {
    const newState = carsReducer(initialState, {
      type: CAR_UPDATE_CAR_SEARCH_TERM,
      payload: 'ABC'
    });

    expect(newState.searchTerm).toEqual('ABC');
  });

  it('handles the REGISTER_CAR action', () => {
    const newState = carsReducer(initialState, {
      type: REGISTER_CAR,
      payload: car
    });
 
    expect(Object.values(newState.list)).toContainEqual(car);
  });

  it('ignore actions it does not know about', () => {
    const newState = carsReducer(initialState, {
      type: 'MADE_UP_TYPE',
      payload: 'silly test'
    });

    expect(newState).toEqual(initialState);
  });
});
