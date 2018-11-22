import Cars from '../../components/cars/Cars';
import { getAllCars } from '../../selectors/cars';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  cars: getAllCars(state)
});

export default connect(
  mapStateToProps
)(Cars);
