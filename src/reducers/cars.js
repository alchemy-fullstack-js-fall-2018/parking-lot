import Chance from 'chance';
import uuid from 'uuid/v4';
import { UPDATE_CARS } from '../actions/cars';

const chance = new Chance();

const initialState = {
  searchTerm: '',
  list: cars
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case UPDATE_CARS:
      return { ...state, searchTerm: payload };
    default:
      return state;
  }
}