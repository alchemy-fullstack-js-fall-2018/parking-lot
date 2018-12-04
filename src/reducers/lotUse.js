import fakeLot from './cars';
import { LOT_CAR_ARRIVED } from '../actions/lotAction';
import { REGISTER_CAR } from '../actions/carActions';

const initialState = {

}

export default function reducer(state = initialState, action ) {
  switch(action.type) {
    case LOT_CAR_ARRIVED:
      return { ...state, [action.payload.plate]: (state[action.payload.plate] || 0) +1 };
    default:
      return state;
  }
};
