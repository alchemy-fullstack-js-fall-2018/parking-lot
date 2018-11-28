import Chance from 'chance';
import { UPDATE_CARS_SEARCH_TERM, REGISTER_CAR } from '../actions/cars';

const chance = new Chance();

const initialCars = Array.apply(null, { length: 20 })
  .map(() => ({
    plate: chance.string({
      length: 6,
      pool: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
    }),
    make: chance.pickone(['Honda', 'Toyota', 'Tesla', 'Lexus', 'Acura']),
    model: chance.pickone(['Sedan', 'Crossover', 'Truck', 'Sport', 'Coupe'])
  }))
  .reduce((acc, c) => {
    acc[c.plate] = c;
    return acc;
  }, {});

const initialState = {
  searchTerm: '',
  list: initialCars
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case UPDATE_CARS_SEARCH_TERM:
      return { ...state, searchTerm: payload.toUpperCase() };
    case REGISTER_CAR:
      return { ...state, list: { ...state.list, [payload.plate]: payload } };
    default:
      return state;
  }
}
