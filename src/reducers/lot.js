//import your actions here
import {
  LOT_UPDATE_CAR_SEARCH_TERM,
  LOT_CAR_ARRIVED,
  LOT_CAR_DEPARTED
} from '../actions/lot';

const initialState = {

};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case LOT_UPDATE_CAR_SEARCH_TERM:
      return {};
    case LOT_CAR_ARRIVED:
      return {};
    case LOT_CAR_DEPARTED:
      return {};
    default: return state;
  }
}
