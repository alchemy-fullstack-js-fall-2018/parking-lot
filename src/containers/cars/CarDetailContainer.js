import CarDetail from '../../components/cars/CarDetail';
import { getCarsBySearch } from '../../selectors/cars';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  car: getCarsBySearch(state)
});

export default connect(
  mapStateToProps
)(CarDetail);
