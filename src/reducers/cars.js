import {
  REGISTER_CAR,
  CAR_UPDATE_SEARCH_TERM
} from '../actions/cars';

const initialState = {
  searchTerm: '',
  list: {
    abc1234: {
      make: 'Ford',
      model: 'Pinto',
      plate: 'abc1234'
    },
    def5678: {
      make: 'Honda',
      model: 'Civic',
      plate: 'def5678'
    },
    ham4040: {
      make: 'Subaru',
      model: 'Outback',
      plate: 'ham4040'
    },
    scr4nt0n: {
      make: 'Chrysler',
      model: 'Sebring',
      plate: 'scr4nt0n'
    },
    xyz123: {
      make: 'Toyota',
      model: 'Camry',
      plate: 'xyz123'
    }
  }
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case REGISTER_CAR:
      return { ...state,  list: { ...state.list, [payload.plate]: payload } };
    case CAR_UPDATE_SEARCH_TERM:
      return { ...state, searchTerm: payload };
    default: return state;
  }
}
