import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Cars from '../../components/Cars/Cars';
import { updateCarsSearchTerm } from '../../actions/cars';
import { getFilteredCars, getCarsSearchTerm } from '../../selectors/cars';

class FilteredCars extends PureComponent {
  static propTypes = {
    cars: PropTypes.array.isRequired,
    searchTerm: PropTypes.string.isRequired,
    updateSearchTerm: PropTypes.func.isRequired
  };

  render() {
    const { cars, searchTerm, updateSearchTerm } = this.props;
    return (
      <Fragment>
        <form>
          <label htmlFor="searchTerm">Search: </label>
          <input type="text" value={searchTerm} onChange={updateSearchTerm} />
        </form>
        <Cars cars={cars} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  cars: getFilteredCars(state),
  searchTerm: getCarsSearchTerm(state)
});

const mapDispatchToProps = dispatch => ({
  updateSearchTerm: ({ target }) => dispatch(updateCarsSearchTerm(target.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilteredCars);
