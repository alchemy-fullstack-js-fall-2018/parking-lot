import Chance from 'chance';
import uuid from 'uuid/v4';
import { REGISTER_CAR, CAR_UPDATE_CAR_SEARCH_TERM } from '../actions/carActions';

const chance = new Chance();

chance.mixin({
  car: () => ({
    make: chance.pickone(['BMW', 'Toyota', 'Ford', 'Honda', 'Lexus', 'Jeep', 'Masserati', 'Mini Cooper', 'Scion']),
    model: chance.animal(),
    plate: chance.string({ length: 6, pool: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'}),
    inLot: chance.integer({ min: 0, max: 15 })
  })
});

const fakeCars = Array.apply(null, { length: 80 })
  .reduce(acc => {
    acc[uuid()] = chance.car();
    return acc;
  }, {});

  const initialState = {
    searchTerm: '',
    carList: fakeCars
  };

  export default function reducer(state = initialState, action) {
    switch(action.type) {
      case REGISTER_CAR:
        return { ...state, carList: [...state[action.payload], action.payload] };
      case CAR_UPDATE_CAR_SEARCH_TERM:
        return { ...state, searchTerm: action.payload };
      default:
        return state;
  }
}
