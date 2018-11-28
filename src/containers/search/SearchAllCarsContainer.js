import { connect } from 'react-redux';
import SearchCars from '../../components/search/SearchCars';
import { updateCarsSearchTerm } from '../../actions/cars';
import { getCarSearchTerm, getCarsFilter } from '../../selectors/cars';

const mapStateToProps = state => ({
  searchTerm: getCarSearchTerm(state),
  filteredCars: getCarsFilter(state)
});

const mapDispatchToProps = dispatch => ({
  updateSearchTerm: ({ target }) => dispatch(updateCarsSearchTerm(target.value))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchCars);
