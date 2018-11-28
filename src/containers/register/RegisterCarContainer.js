import { connect } from 'react-redux';
import { registerCar } from '../../actions/cars';
import RegisterCarForm from '../../components/register/RegisterCarForm';

const mapDispatchToProps = dispatch => ({
  registerCar: (plate, make, model) => dispatch(registerCar(plate, make, model))
});


export default connect(
  null,
  mapDispatchToProps
)(RegisterCarForm);
