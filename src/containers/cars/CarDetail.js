import { connect } from 'react-redux';
import CarDetail from '../../components/CarDetail/CarDetail';
import { getCar } from '../../selectors/cars';
import { lotCarArrived, lotCarDeparted } from '../../actions/lot';

const mapStateToProps = (state, props) => {
  return {
    car: getCar(state, props.match.params.id)
  };
};

const mapDispatchToProps = dispatch => ({
  carArrives: (plate) => dispatch(lotCarArrived(plate)),
  carDeparts: (plate) => dispatch(lotCarDeparted(plate))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarDetail);
