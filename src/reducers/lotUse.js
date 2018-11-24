import { LOT_CAR_ARRIVED } from '../actions/lot';

const initialState = {
  'ABC123': 1,
  'YCU411': 2,
  'QED314': 1
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case LOT_CAR_ARRIVED:
      return { ...state, state[payload]: state[payload]++}
    default:
      return state;
  }
}