import fakeLot from '../fixtures/fakeLot';
import { LOT_CAR_ARRIVED, LOT_CAR_DEPARTED, LOT_UPDATE_SEARCH_TERM } from '../actions/lot';

const initialState = {
  searchTerm: '',
  carsInLot: fakeLot
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case LOT_CAR_ARRIVED:
      return { ...state, carsInLot: { ...state.carsInLot, [action.payload.plate]: action.payload } };
    case LOT_CAR_DEPARTED:
      delete state.carsInLot[action.payload.plate];
      return { ...state, carsInLot: state.carsInLot };
    case LOT_UPDATE_SEARCH_TERM:
      return { ...state, searchTerm: action.payload.toUpperCase() };
    default:
      return state;
  }
}
