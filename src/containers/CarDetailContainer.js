import { connect } from 'react-redux';
import CarDetail from '../components/carDetails/CarDetail';
import { lotCarArrived, lotCarDeparted } from '../actions/lotAction'
import { getCars } from '../selectors/cars';
import { getTimesInLot } from '../selectors/lotUse';

const mapStateToProps = state => ({
  cars: getCars(state),
  lotUsage: getTimesInLot(state),
});

const mapDispatchToProps = dispatch => ({
  addToLot: ({ target }) => dispatch(lotCarArrived(target.value)),
  removeFromLot: ({ target }) => dispatch(lotCarDeparted(target.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarDetail);
