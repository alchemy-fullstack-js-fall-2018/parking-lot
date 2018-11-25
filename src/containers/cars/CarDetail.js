import { connect } from 'react-redux';
import CarDetail from '../../components/cars/CarDetail';
import { lotCarArrived, lotCarDeparted } from '../../actions/lot';
import { getCar } from '../../selectors/cars';

const mapStateToProps = (state, props) => {
  return {
    car: getCar(state, props.match.params.id)
  };
};

const mapDispatchToProps = dispatch => ({
  carArrival: (plate) => dispatch(lotCarArrived(plate)),
  carDeparture: (plate) => dispatch(lotCarDeparted(plate))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarDetail);
