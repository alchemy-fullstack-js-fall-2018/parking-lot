import { connect } from 'react-redux';
import Car from '../../components/Car/Car';
import { getCar } from '../../selectors/cars';

const mapStateToProps = (state, props) => {
  return {
    car: getCar(state, props.match.params.id)
  };
};

export default connect(
  mapStateToProps
)(Car);
