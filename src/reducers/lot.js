import fakeLot from '../fixtures/fakeLot';
import { LOT_CAR_ARRIVED, LOT_CAR_DEPARTED } from '../actions/lot';

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
    default:
      return state;
  }
}
