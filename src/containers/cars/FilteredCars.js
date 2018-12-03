import { connect } from 'react-redux';
import CarsSearch from '../../components/cars/CarsSearch';
import {
  getFilteredCars,
  getSearchTerm,
  getTotalCars
} from '../../selectors/cars';
import { carUpdateCarSearchTerm } from '../../actions/cars';

const mapStateToProps = state => ({
  cars: getFilteredCars(state),
  searchTerm: getSearchTerm(state),
  totalCars: getTotalCars(state)
});

const mapDispatchToProps = dispatch => ({
  updateSearchTerm: ({ target }) =>
    dispatch(carUpdateCarSearchTerm(target.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarsSearch);
