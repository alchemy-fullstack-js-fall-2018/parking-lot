import { REGISTER_CAR, CAR_UPDATE_SEARCH_TERM } from '../actions/cars';
import fakeCars from '../fixtures/fakeCars';

const initialState = {
  searchTerm: '',
  carList: fakeCars
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case REGISTER_CAR:
      return { ...state, carList: { ...state.carList, [action.payload.plate]: action.payload } };
    case CAR_UPDATE_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
    default:
      return state;
  }
}
