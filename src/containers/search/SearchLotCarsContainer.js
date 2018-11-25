import { connect } from 'react-redux';
import SearchCars from '../../components/search/SearchCars';
import { lotUpdateSearchTerm } from '../../actions/lot';
import { getLotSearchTerm, getLotCarsBySearch } from '../../selectors/lot';

const mapDispatchToProps = dispatch => ({
  updateSearchTerm: ({ target }) => dispatch(lotUpdateSearchTerm(target.value))
});

const mapStateToProps = state => ({
  searchTerm: getLotSearchTerm(state),
  car: getLotCarsBySearch(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(SearchCars);
