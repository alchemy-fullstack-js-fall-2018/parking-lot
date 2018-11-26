import FilteredCars from '../cars/FilteredCars';
import { connect } from 'react-redux';
import { updateLotSearchTerm } from '../../actions/lot';
import { getFilteredCars, getLotSearchTerm } from '../../selectors/lot';

const mapStateToProps = state => ({
  cars: getFilteredCars(state),
  searchTerm: getLotSearchTerm(state)
});

const mapDispatchToProps = dispatch => ({
  updateSearchTerm: ({ target }) => dispatch(updateLotSearchTerm(target.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilteredCars);
