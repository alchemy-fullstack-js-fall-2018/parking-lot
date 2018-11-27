import { connect } from 'react-redux';
import SearchCars from '../components/searchCars/SearchCars';
import { getLotCarsBySearch, getLotSearchTerm } from '../selectors/lot';
import { updateLotSearchTerm } from '../actions/lot';

const mapStateToProps = state => ({
  cars: getLotCarsBySearch(state),
  searchTerm: getLotSearchTerm(state)
});

const mapDispatchToProps = dispatch => ({
  updateSearchTerm: ({ target }) => dispatch(updateLotSearchTerm(target.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchCars);
