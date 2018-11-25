import fakeLotUse from '../fixtures/fakeLotUse';
import { LOT_CAR_ARRIVED } from '../actions/lot';
import { REGISTER_CAR } from '../actions/cars';

const initialState = {
  lotUse: fakeLotUse
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case LOT_CAR_ARRIVED:
      return { ...state, lotUse: { ...state.lotUse, [action.payload.plate]: state.lotUse[action.payload.plate] + 1 } };
    case REGISTER_CAR:
      return { ...state, lotUse: { ...state.lotUse, [action.payload.plate]: 0 } };
    default:
      return state;
  }
}
