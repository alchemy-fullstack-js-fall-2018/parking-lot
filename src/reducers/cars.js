//import your actions here
import {
  REGISTER_CAR,
  CAR_UPDATE_SEARCH_TERM
} from '../actions/cars';

const initialState = {
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
  }
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
