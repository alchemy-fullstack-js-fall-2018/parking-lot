// Handles REGISTER_CAR, CAR_UPDATE_CAR_SEARCH_TERM

const initialState = {
  searchTerm: '',
  list: {
    'ABC123': { make: 'Honda', model: 'Civic', color: 'silver' },
    'YCU411': { make: 'Toyota', model: 'Prius', color: 'red' },
    'QED314': { make: 'Dodge', model: 'Caravan', color: 'maroon' },
    'LCD007': { make: 'Mazda', model: 'CRV', color: 'black' },
    'RPM999': { make: 'Subaru', model: 'Forester', color: 'green' }
  }
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    default:
      return state;
  }
}
