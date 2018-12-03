import lotReducer from './lot';
import {
  LOT_CAR_ARRIVED,
  LOT_UPDATE_CAR_SEARCH_TERM,
  LOT_CAR_DEPARTED
} from '../actions/lot';

describe('lot reducer', () => {
  const initialState = {
    searchTerm: '',
    list: {
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
      },
      JKL101: {
        id: 'JKL101',
        make: 'Nissan',
        model: 'Altima',
        color: 'red',
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

  it('handles the LOT_UPDATE_CAR_SEARCH_TERM action', () => {
    const newState = lotReducer(initialState, {
      type: LOT_UPDATE_CAR_SEARCH_TERM,
      payload: 'ABC'
    });

    expect(newState.searchTerm).toEqual('ABC');
  });

  it('handles the LOT_CAR_ARRIVED action', () => {
    const newState = lotReducer(initialState, {
      type: LOT_CAR_ARRIVED,
      payload: car
    });

    expect(Object.values(newState.list)).toContainEqual(car);
  });

  it('handles the LOT_CAR_DEPARTED action', () => {
    const newState = lotReducer(initialState, {
      type: LOT_CAR_DEPARTED,
      payload: car.id
    });

    expect(Object.values(newState.list)).not.toContainEqual(car);
  });

  it('ignore actions it does not know about', () => {
    const newState = lotReducer(initialState, {
      type: 'MADE_UP_TYPE',
      payload: 'silly test'
    });

    expect(newState).toEqual(initialState);
  });
});
