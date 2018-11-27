import { LOT_CAR_ARRIVED } from '../actions/lot';

const initialState = {
  def5678: 1,
  scr4nt0n: 3,
  xyz123: 6
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case LOT_CAR_ARRIVED: {
      const useCount = state[payload] || 0;
      return { ...state, [payload]: useCount + 1 };
    }
    default: return state;
  }
}
