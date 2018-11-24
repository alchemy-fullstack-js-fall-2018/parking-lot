import { LOT_CAR_ARRIVED } from '../actions/lot';

const initialState = {
  'ABC123': 1,
  'YCU411': 2,
  'QED314': 1
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case LOT_CAR_ARRIVED: {
      const visitCount = state[payload] || 0;
      return { ...state, [payload]: visitCount + 1 };
    }
    default:
      return state;
  }
}
