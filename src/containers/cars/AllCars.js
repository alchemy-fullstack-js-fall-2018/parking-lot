import { connect } from 'react-redux';
import Cars from '../../components/Cars/Cars';
import { getCars, getTotalCars } from '../../selectors/cars';

const mapStateToProps = state => ({
  cars: getCars(state),
  totalCars: getTotalCars(state)
});

export default connect(
  mapStateToProps
)(Cars);
