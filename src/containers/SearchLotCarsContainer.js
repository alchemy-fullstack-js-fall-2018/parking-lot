import { connect } from 'react-redux';
import SearchCars from '../components/searchCar/SearchCar';
import { getLotCars, getLotCarsBySearch  } from '../selectors/lot';
import { lotUpdateCarSearchTerm } from '../actions/lotAction';

const mapStateToProps = state => ({
  searchTerm: getLotCarsBySearch(state),
  cars: getLotCars(state)
});

const mapDispatchToProps = dispatch => ({
  updateSearchTerm: ({ target }) => dispatch(lotUpdateCarSearchTerm(target.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(SearchCars);
