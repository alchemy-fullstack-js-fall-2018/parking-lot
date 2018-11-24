import { UPDATE_LOT_SEARCH_TERM, LOT_CAR_ARRIVED, LOT_CAR_DEPARTED } from '../actions/lot';

const initialState = {
  searchTerm: '',
  list: ['ABC123', 'YCU411']
};

export default function reducer(state = initialState, { type, payload }) {
  const index = state.list.indexOf(payload);
  switch(type) {

    case UPDATE_LOT_SEARCH_TERM:
      return { ...state, searchTerm: payload };

    case LOT_CAR_ARRIVED:
      if(index === -1) {
        return { ...state, list: [...state.list, payload] };
      } else {
        return state;
      }

    case LOT_CAR_DEPARTED:
      if(index > -1) {
        return { ...state, list: [
          ...state.list.slice(0, index),
          ...state.list.slice(index + 1)] };
      } else {
        return state;
      }
      
    default:
      return state;
  }
}
