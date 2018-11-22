import { REGISTER_CAR } from '../actions/cars';
import fakeCars from '../fixtures/fakeCars';

const initialState = {
  searchTerm: 'searcher',
  carList: fakeCars
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case REGISTER_CAR:
      return { ...state, carList: { ...state.carList, [action.payload.plate]: action.payload } };

    default:
      return state;
  }
}
