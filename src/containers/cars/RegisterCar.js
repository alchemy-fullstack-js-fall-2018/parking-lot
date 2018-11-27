import { connect } from 'react-redux';
import RegisterCarForm from '../../components/cars/RegisterCarForm';
import { registerCar } from '../../actions/cars';

const mapDispatchToProps = dispatch => ({
  registerCar: car => {
    dispatch(registerCar(car));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(RegisterCarForm);
