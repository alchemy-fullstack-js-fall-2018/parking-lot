import { connect } from 'react-redux';
import CarDetail from '../../components/cars/CarDetail';
import { getCar, getLotUse } from '../../selectors/cars';
import { lotCarArrived, lotCarDeparted } from '../../actions/lot';

const mapStateToProps = (state, props) => ({
  car: getCar(state, props.match.params.id),
  lotUse: getLotUse(state, props.match.params.id)
});

const mapDispatchToProps = dispatch => ({
  carArrived: car => dispatch(lotCarArrived(car)),
  carDeparted: ({ target }) => dispatch(lotCarDeparted(target.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarDetail);
