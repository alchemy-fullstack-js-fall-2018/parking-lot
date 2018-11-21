import { CAR_UPDATE_CAR_SEARCH_TERM } from '../actions/cars';

const initialState = {
    searchTerm: '',
    list: {
        'ABC 123': { make: 'Honda', model: 'Accord', color: 'white', state: 'OR' },
        'DEF 456': { make: 'Toyota', model: 'Camry', color: 'silver', state: 'OR' },
        'GHI 789': { make: 'Hyundai', model: 'Elantra', color: 'blue', state: 'WA' },
        'JKL 101': { make: 'Nissan', model: 'Altima', color: 'red', state: 'WA' }
    }
};

export default function reducer(state = initialState, { type, payload }) {
    switch(type) {
        case CAR_UPDATE_CAR_SEARCH_TERM:
            return { ...state, searchTerm: payload };
        default:
            return state;
    }
}

