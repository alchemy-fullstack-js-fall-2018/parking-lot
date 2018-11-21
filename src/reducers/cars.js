import { REGISTER_CAR } from '../actions/car';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case REGISTER_CAR:
      return [...state, [action.payload]];

    default:
      return state;
  }
}
