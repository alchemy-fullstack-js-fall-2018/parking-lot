import {
  REGISTER_CARS
} from '../actions/cars';

const initialState = {
  ISUK123: {
    make: 'Ford',
    model: 'Pinto',
    plate: 'ISUK123',
  },
  FOOKM3: {
    make: 'Plymouth',
    model: 'Prowler',
    plate: 'FOOKM3',
  },
  OLDMAN: {
    make: 'Cadillac',
    model: 'Deville',
    plate: 'OLDMAN'
  }
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case REGISTER_CARS:
      return { ...state, [action.payload.plate]: action.payload };
    default:
      return state;
  }
}
