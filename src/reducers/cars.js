//import your actions here
import {
  REGISTER_CAR,
  CAR_UPDATE_SEARCH_TERM
} from '../actions/cars';

const initialState = {

};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case REGISTER_CAR:
      return {};
    case CAR_UPDATE_SEARCH_TERM:
      return {};
    default: return state;
  }
}
