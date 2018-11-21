import { REGISTER_CAR } from '../actions/cars';
import fakeCars from '../fixtures/fakeCars';

const initialState = {};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case REGISTER_CAR:
      return { ...state, [action.payload.plate]: action.payload };

    default:
      return state;
  }
}
