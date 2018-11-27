import { connect } from 'react-redux';
import Cars from '../../components/Cars/Cars';
import { getCars } from '../../selectors/lot';

const mapStateToProps = state => ({
  cars: getCars(state),
  summary: 'Cars in Lot'
});

export default connect(
  mapStateToProps
)(Cars);
