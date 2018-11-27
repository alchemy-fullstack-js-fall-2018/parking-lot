import CarDetail from '../../components/cars/CarDetail';
import { getCar } from '../../selectors/cars';
import { getLotStatus } from '../../selectors/lot';
import { addToLot, removeFromLot } from '../../actions/lot';
import { connect } from 'react-redux';
import { getTimesInLot } from '../../selectors/lotUse';

const mapStateToProps = (state, props) => ({
  car: getCar(state, props.match.params.id),
  inLot: getLotStatus(state, props.match.params.id),
  lotUsage: getTimesInLot(state, props.match.params.id)
});

const mapDispatchToProps = dispatch => ({
  addToLot: (make, model, plate) => dispatch(addToLot(make, model, plate)),
  removeFromLot: plate => dispatch(removeFromLot(plate))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarDetail);
