import { connect } from 'react-redux';
import { registerCar } from '../../actions/cars';
import CarRegistration from '../../components/CarRegistration/CarRegistration';

const mapStateToProps = () => {
  return { plate: '', make: '', model: '', color: '' };
};

const mapDispatchToProps = dispatch => ({
  onSubmit(car) {
    dispatch(registerCar(car));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarRegistration);
