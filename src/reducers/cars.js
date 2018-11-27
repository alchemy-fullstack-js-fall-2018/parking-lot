import { CAR_UPDATE_CAR_SEARCH_TERM, REGISTER_CAR } from '../actions/cars';

const initialState = {
  searchTerm: '',
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
    case CAR_UPDATE_CAR_SEARCH_TERM:
      return { ...state, searchTerm: payload };
    case REGISTER_CAR:
      return { ...state, list: { ...state.list, [payload.id]: payload } };
    default:
      return state;
  }
}
