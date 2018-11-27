import { LOT_CAR_ARRIVED } from '../actions/lot';

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
    default:
      return state;
  }
}
