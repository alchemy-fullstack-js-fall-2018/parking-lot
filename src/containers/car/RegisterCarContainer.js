import { connect } from 'react-redux';
import RegisterCarFrom from '../../components/registerCarForm/RegisterCarForm';
import { registerCar } from '../../actions/car';

const matchDispatchToProps = dispatch => ({
  registerCar: (make, model, plate) => dispatch(registerCar(make, model, plate))
});

export default connect(
  matchDispatchToProps(RegisterCarFrom)
);