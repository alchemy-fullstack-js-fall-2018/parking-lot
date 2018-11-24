import { UPDATE_LOT_SEARCH_TERM, LOT_CAR_ARRIVED, LOT_CAR_DEPARTED } from '../actions/lot';

const initialState = {
  searchTerm: '',
  list: ['ABC123', 'YCU411']
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case UPDATE_LOT_SEARCH_TERM:
      return { ...state, searchTerm: payload };
    case LOT_CAR_ARRIVED:
      return { ...state, list: [...state.list, payload] };
    case LOT_CAR_DEPARTED:
      return { ...state, list: state.list.splice(state.list.indexOf(payload), 1) };
    default:
      return state;
  }
}
