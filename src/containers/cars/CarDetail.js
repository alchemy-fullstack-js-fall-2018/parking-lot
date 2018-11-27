import { connect } from 'react-redux';
import CarDetail from '../../components/cars/CarDetail';
import { getCar } from '../../selectors/cars';
import { lotCarArrived, lotCarDeparted } from '../../actions/lot';

const mapStateToProps = (state, props) => ({
  car: getCar(state, props.match.params.id)
});

const mapDispatchToProps = dispatch => ({
  carArrived: ({ target }) => dispatch(lotCarArrived(target.value)),
  carDeparted: ({ target }) => dispatch(lotCarDeparted(target.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarDetail);
