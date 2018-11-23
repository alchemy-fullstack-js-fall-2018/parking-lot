import { connect } from 'react-redux';
import SearchCars from '../../components/search/SearchCars';
import { carUpdateSearchTerm } from '../../actions/cars';
import { getCarSearchTerm, getCarsBySearch } from '../../selectors/cars';

const mapDispatchToProps = dispatch => ({
  updateSearchTerm: ({ target }) => dispatch(carUpdateSearchTerm(target.value))
});

const mapStateToProps = state => ({
  searchTerm: getCarSearchTerm(state),
  car: getCarsBySearch(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(SearchCars);
