/* eslint-disable no-case-declarations */
import fakeLot from '../fixtures/fakeLot';
import { LOT_CAR_ARRIVED, LOT_CAR_DEPARTED } from '../actions/lot';

const initialState = {
  searchTerm: '',
  carsInLot: fakeLot
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case LOT_CAR_ARRIVED:


      return { ...state, carsInLot: [...state.carsInLot, action.payload.plate] };
    case LOT_CAR_DEPARTED:
      return { ...state, carsInLot: [state.carsInLot.filter(item => item !== action.payload.plate)] };
      // return (
      //   state.carsInLot.forEach((car, index) => {
      //     if(car === action.payload.plate) return state.carsInLot.splice(index, 0);
      //   })
      // );
    default:
      return state;
  }
}
