// Handles REGISTER_CAR, CAR_UPDATE_CAR_SEARCH_TERM

const initialState = {
  searchTerm: '',
  list: {
    'ABC 123': { make: 'Honda', model: 'Civic', color: 'silver' },
    'YCU 411': { make: 'Toyota', model: 'Prius', color: 'red' },
    'QED 314': { make: 'Dodge', model: 'Caravan', color: 'maroon' },
    'LCD 007': { make: 'Mazda', model: 'CRV', color: 'black' },
    'RPM 999': { make: 'Subaru', model: 'Forester', color: 'green' }
  }
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    default:
      return state;
  }
}
