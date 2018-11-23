import { connect } from 'react-redux';
import CarDetail from '../../components/CarDetail/CarDetail';
import { getCar } from '../../selectors/cars';

const mapStateToProps = (state, props) => {
  return {
    car: getCar(state, props.match.params.id)
  };
};

export default connect(
  mapStateToProps
)(CarDetail);
