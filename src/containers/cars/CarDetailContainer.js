import { connect } from 'react-redux';
import { getCar } from '../../selectors/cars';
import CarDetail from '../../components/cars/CarDetail';

const mapStateToProps = (state, props) => ({
  car: getCar(state, props.match.params.id)
});

export default connect(mapStateToProps)(CarDetail);
