import CarDetail from '../../components/cars/CarDetail';
import { getCarsBySearch, getCar } from '../../selectors/cars';
import { carUpdateSearchTerm } from '../../actions/cars';
import { connect } from 'react-redux';

const mapStateToProps = (state, props) => ({
  car: getCar(state, props.match.params.id)
});

export default connect(
  mapStateToProps
)(CarDetail);
