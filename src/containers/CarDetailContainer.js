import { connect } from 'react-redux';
import Cars from '../components/cars/Cars';
import { getCarsBySearch } from '../selectors/cars';

const mapStateToProps = state => ({
  findCarBySearch: getCarsBySearch(state)
});

export default connect(
  mapStateToProps
)(Cars);
