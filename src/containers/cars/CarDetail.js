import { connect } from 'react-redux';
import CarDetail from '../../components/cars/CarDetail';
import { getCar } from '../../selectors/cars';

const mapStateToProps = (state, props) => ({
  car: getCar(state, props.match.params.id)
});

export default connect(
  mapStateToProps,
  null
)(CarDetail);
