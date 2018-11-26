import {
  REGISTER_CARS,
  CAR_UPDATE_CAR_SEARCH_TERM
} from '../actions/cars';

const initialState = {
  searchTerm: '',
  list: {
    ISUK123: {
      make: 'Ford',
      model: 'Pinto',
      plate: 'ISUK123'
    },
    FOOKM3: {
      make: 'Plymouth',
      model: 'Prowler',
      plate: 'FOOKM3'
    },
    OLDMAN: {
      make: 'Cadillac',
      model: 'Deville',
      plate: 'OLDMAN'
    }
  }
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case REGISTER_CARS:
      return { ...state, list: { ...state.list, [payload.plate]: payload } };
    case CAR_UPDATE_CAR_SEARCH_TERM:
      return { ...state, searchTerm: payload };
    default:
      return state;
  }
}
