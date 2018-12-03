import { connect } from 'react-redux';
import CarDetail from '../components/carDetails/CarDetail';
import { getCars } from '../selectors/cars';
import { getTimesInLot } from '../selectors/lotUse';
import { getLotStatus } from '../selectors/lot';
import { lotCarArrived, lotCarDeparted } from '../actions/lotAction'

const mapStateToProps = ( state, props) => ({
  car: getCars(state, props.match.params.id),
  inLot: getLotStatus(state, props.match.params.id),
  lotUsage: getTimesInLot(state, props.match.params.id)
});

const mapDispatchToProps = dispatch => ({
  addToLot: ({ target }) => dispatch(lotCarArrived(target.value)),
  removeFromLot: ({ target }) => dispatch(lotCarDeparted(target.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarDetail);
