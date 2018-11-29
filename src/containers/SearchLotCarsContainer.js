import { connect } from 'react-redux';
import SearchCar from '../components/searchCar/SearchCar';
import { getLotCars, getLotCarsBySearch  } from '../selectors/lot';
import { lotUpdateCarSearchTerm } from '../actions/lotAction';

const mapStateToProps = state => ({
  getLotCarsbySearch: getLotCarsBySearch(state),
});

export default connect(
  mapStateToProps
)(SearchCar);
