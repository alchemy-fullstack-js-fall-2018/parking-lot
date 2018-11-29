import fakeLot from './cars';
import { LOT_CAR_ARRIVED } from '../actions/lotAction';
import { REGISTER_CAR } from '../actions/carActions';

const initialState = {
  lotUse: fakeLot,
}

export default function reducer(state = initialState, action ) {
  switch(action.type) {
    case LOT_CAR_ARRIVED:
      return { ...state, lotUse: { ...state.lotUse,[action.payload.plate]: state.lotUse[action.payload.plate] +1 }};
    case REGISTER_CAR:
      return { ...state, lotUse: { ...state.lotUse, [action.payload.plate]: 0 }};
    default:
      return state;
  }
};
