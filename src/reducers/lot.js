import { LOT_CAR_ARRIVED, LOT_UPDATE_CAR_SEARCH_TERM, LOT_CAR_DEPARTED } from '../actions/lot';

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

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case LOT_CAR_ARRIVED:
      return { ...state, list: { ...state.list, [payload.id]: payload } };
    case LOT_UPDATE_CAR_SEARCH_TERM:
      return { ...state, searchTerm: payload };
    case LOT_CAR_DEPARTED:
      return { ...state, list: { ...state.list, [payload]: undefined } };
    default:
      return state;
  }
}
