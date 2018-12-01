import { connect } from 'react-redux';
import CarSearch from '../../presentational/cars/CarSearch.jsx';
import { updateSearch } from '../../../data/state/actions/cars';
import { searchCars } from '../../../data/state/selectors/cars';

const mapStateToProps = state => ({
  cars: searchCars(state)
});

const mapDispatchToProps = dispatch => ({
  updateSearch: (searchTerm) => dispatch(updateSearch(searchTerm))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarSearch);
