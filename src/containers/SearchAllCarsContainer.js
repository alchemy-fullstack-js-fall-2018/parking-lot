import { connect } from 'react-redux';
import SearchCars from '../components/searchCars/SearchCars';
import { getCarsBySearch, getCarSearchTerm } from '../selectors/cars';
import { updateCarSearchTerm } from '../actions/cars';

const mapStateToProps = state => ({
  cars: getCarsBySearch(state),
  searchTerm: getCarSearchTerm(state)
});

const mapDispatchToProps = dispatch => ({
  updateSearchTerm: ({ target }) => dispatch(updateCarSearchTerm(target.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchCars);
