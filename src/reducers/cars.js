import {
  REGISTER_CARS
} from '../actions/cars';

const initialState = [
  {
    make: 'Ford',
    model: 'Pinto',
    plate: 'ISUK123',
  },
  {
    make: 'Plymouth',
    model: 'Prowler',
    plate: 'FOOKM3',
  },
  {
    make: 'Cadillac',
    model: 'Deville',
    plate: '0LDMAN'
  }
];

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case REGISTER_CARS:
      return [...state,  action.payload];
    default:
      return state;
  }
}
