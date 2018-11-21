import { REGISTER_CAR } from '../actions/car';

const initialState = {
  cars: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case REGISTER_CAR:
      return { ...state, [action.payload]: [...state] };
    default:
      return state;
  }
}
