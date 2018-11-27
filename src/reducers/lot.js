import {
  LOT_UPDATE_CAR_SEARCH_TERM,
  LOT_CAR_ARRIVED,
  LOT_CAR_DEPARTED
} from '../actions/lot';

const initialState = {
  searchTerm: '',
  list: {
    def5678: {
      make: 'Honda',
      model: 'Civic',
      plate: 'def5678'
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
    case LOT_UPDATE_CAR_SEARCH_TERM:
      return { ...state, searchTerm: payload };
    case LOT_CAR_ARRIVED:
      return { ...state, list: { ...state.list, [payload.plate]: payload } };
    case LOT_CAR_DEPARTED:
      delete state.list[payload.plate];
      return { ...state, list: state.list };
    default: return state;
  }
}
