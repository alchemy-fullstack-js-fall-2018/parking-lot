import { connect } from 'react-redux';
import FilteredCars from '../../components/cars/FilteredCars';
import { updateCarSearchTerm } from '../../actions/cars';
import { getFilteredCars, getCarsSearchTerm } from '../../selectors/cars';


const mapStateToProps = state => ({
  cars: getFilteredCars(state),
  searchTerm: getCarsSearchTerm(state)
});

const mapDispatchToProps = dispatch => ({
  updateSearchTerm: ({ target }) => dispatch(updateCarSearchTerm(target.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilteredCars);
