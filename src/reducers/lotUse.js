
import { LOT_CAR_ARRIVED } from '../actions/lot';

const initialState = {
  'ISUK123': 1,
  'FOOKM3': 2,
  'OLDMAN': 3
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case LOT_CAR_ARRIVED: {
      const stayCount = state[payload] || 0;
      return { ...state, [payload]: stayCount + 1 };
    }
    default:
      return state;
  }
}
