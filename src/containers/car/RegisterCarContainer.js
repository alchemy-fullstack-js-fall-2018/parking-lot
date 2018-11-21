import { connect } from 'react-redux';
import RegisterCarForm from '../../components/registerCarForm/RegisterCarForm';
import { registerCar } from '../../actions/car';

const mapDispatchToProps = dispatch => ({
  registerCar: (make, model, plate) => dispatch(registerCar(make, model, plate))
});


export default connect(
  () => ({}),
  mapDispatchToProps
)(RegisterCarForm);
