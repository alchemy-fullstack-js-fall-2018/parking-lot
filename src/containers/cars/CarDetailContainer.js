import CarDetail from '../../components/cars/CarDetail';
import { getCarsBySearch, getCar } from '../../selectors/cars';
import { getLotStatus } from '../../selectors/lot';
import { carUpdateSearchTerm } from '../../actions/cars';
import { addToLot, removeFromLot } from '../../actions/lot';
import { connect } from 'react-redux';

const mapStateToProps = (state, props) => ({
  car: getCar(state, props.match.params.id),
  inLot: getLotStatus(state, props.match.params.id)
});

const mapDispatchToProps = dispatch => ({
  addToLot: (make, model, plate) => dispatch(addToLot(make, model, plate)),
  removeFromLot: (plate) => dispatch(removeFromLot(plate))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarDetail);
