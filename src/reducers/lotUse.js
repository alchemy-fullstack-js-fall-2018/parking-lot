import { LOT_CAR_ARRIVED } from '../actions/lot';

const initialState = {
  ABC123: 5,
  DEF456: 12,
  GHI789: 3,
  JKL101: 21
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case LOT_CAR_ARRIVED:
      return { ...state, [payload.id]: state[payload.id] + 1 };
    default:
      return state;
  }
}
