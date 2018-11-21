import { connect } from 'react-redux';
import Cars from '../components/cars/Cars';
import { getAllCars } from '../selectors/cars';

const mapStateToProps = state => ({
  cars: getAllCars(state)
});
export default connect(mapStateToProps)(Cars);
