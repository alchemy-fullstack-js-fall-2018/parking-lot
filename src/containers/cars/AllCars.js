import { connect } from 'react-redux';
import Cars from '../../components/Cars/Cars';
import { getCars } from '../../selectors/cars';

const mapStateToProps = state => ({
  cars: getCars(state),
  summary: 'Registered Cars'
});

export default connect(
  mapStateToProps
)(Cars);
