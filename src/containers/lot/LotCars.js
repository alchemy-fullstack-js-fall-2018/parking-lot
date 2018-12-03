import { connect } from 'react-redux';
import Cars from '../../components/cars/Cars';
import { getLotCars } from '../../selectors/lot';

const mapStateToProps = state => ({
  cars: getLotCars(state)
});

export default connect(mapStateToProps)(Cars);
