const initialState = {
  searchTerm: '',
  list: ['ABC123', 'YCU411']
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    default:
      return state;
  }
}
