import { connect } from 'react-redux';
import { registerCars } from '../../actions/cars';
import CarRegistration from '../../components/cars/CarRegistration';

const mapDispatchToProps = dispatch => ({
  onSubmit: (plate, make, model) => dispatch(registerCars(plate, make, model))
});

export default connect(
  null,
  mapDispatchToProps
)(CarRegistration);
