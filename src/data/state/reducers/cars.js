import { REGISTER_CAR, UPDATE_SEARCH, CAR_ARRIVED, CAR_DEPARTED } from '../actions/cars';
import uuid from 'uuid/v4';
import { fakeCars } from '../../../testing/fixtures/fakeCars';

const initialState = {
  searchTerm: '',
  list: fakeCars
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case REGISTER_CAR:
      return {
        searchTerm: state.searchTerm,
        list: {
          ...state.list,
          [uuid()]: { ...payload, inLot: false, lotUses: 0 }
        }
      };
    case UPDATE_SEARCH:
      return { ...state, searchTerm: payload };
    case CAR_ARRIVED:
      return {
        searchTerm: state.searchTerm,
        list: {
          ...state.list,
          [payload]: { ...state.list[payload], lotUses: state.list[payload].lotUses + 1, inLot: true }
        }
      };
    case CAR_DEPARTED:
      return {
        searchTerm: state.searchTerm,
        list: {
          ...state.list,
          [payload]: { ...state.list[payload], inLot: false }
        }
      };
    default:
      return state;
  }
}
