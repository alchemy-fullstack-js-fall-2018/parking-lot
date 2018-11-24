import FilteredCars from '../../components/FilteredCars/FilteredCars';
import { connect } from 'react-redux';
import { updateCarsSearchTerm } from '../../actions/cars';
import { getFilteredCars, getCarsSearchTerm } from '../../selectors/cars';

const mapStateToProps = state => ({
  cars: getFilteredCars(state),
  searchTerm: getCarsSearchTerm(state)
});

const mapDispatchToProps = dispatch => ({
  updateSearchTerm: ({ target }) => dispatch(updateCarsSearchTerm(target.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilteredCars);
