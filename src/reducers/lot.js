import { LOT_UPDATE_CAR_SEARCH_TERM, LOT_CAR_ARRIVED, LOT_CAR_DEPARTED } from '../actions/lotAction';
import fakeCars from './cars';

const initialState = {
  searchTerm: '',
  carsInLot: fakeCars
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case LOT_UPDATE_CAR_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
    case LOT_CAR_ARRIVED:
      return { ...state, carsInLot: { ...state.carsInLot,[action.payload.plate]: action.payload }};
    case LOT_CAR_DEPARTED:
      const updatedCarsInLot = {...state.carsInLot}
      delete updatedCarsInLot[action.payload.plate]
      return { ...state, carsInLot: updatedCarsInLot};
    default:
      return state;
  }
};
