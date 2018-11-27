import { connect } from 'react-redux';
import Cars from '../components/cars/Cars';
import { getLotCars, getLotCarsBySearch } from '../selectors/lot';


const mapStateToProps = state => ({
  cars: getLotCars(state),
  findLotCarBySearch: getLotCarsBySearch(state)
});

export default connect(
  mapStateToProps
)(Cars);
