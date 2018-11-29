import { connect } from 'react-redux';
import Cars from '../components/cars/Cars';
import { getCars, getCarsBySearch } from '../selectors/cars';

const mapStateToProps = state => ({
  cars: getCars(state)
});

export default connect(
  mapStateToProps
)(Cars);
