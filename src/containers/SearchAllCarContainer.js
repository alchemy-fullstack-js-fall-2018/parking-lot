import { connect } from 'react-redux';
import SearchCars from '../components/searchCar/SearchCar';
import { carUpdateCarSearchTerm } from '../actions/carActions';
import { getCars, getCarsBySearch } from '../selectors/cars';

const mapStateToProps = state => ({
  cars: getCars(state),
  searchTerm: getCarsBySearch(state)
});

const mapDispatchToProps = dispatch => ({
  updateSearchTerm: ({ target }) => dispatch(carUpdateCarSearchTerm(target.value))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchCars);
