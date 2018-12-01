import { connect } from 'react-redux';
import CarForm from '../../presentational/cars/CarForm.jsx';
import { registerCar } from '../../../data/state/actions/cars';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  registerCar: (car) => dispatch(registerCar(car))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarForm);
