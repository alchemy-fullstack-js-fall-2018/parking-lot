import React, { Fragment, PureComponent } from 'react';
import Cars from '../cars/Cars';
import PropTypes from 'prop-types';

export default class SearchCars extends PureComponent {
  static propTypes = {
    cars: PropTypes.array.isRequired,
    updateSearchTerm: PropTypes.func.isRequired,
    searchTerm: PropTypes.string.isRequired
  };

  render() {
    const { cars, updateSearchTerm, searchTerm } = this.props;
    console.log('is this thing on?');

    return (
      <Fragment>
        <form>
          <label htmlFor="searchTerm">Search Cars:</label>
          <input type="text" value={searchTerm} onChange={updateSearchTerm} />
        </form>

        <Cars cars={cars} />
      </Fragment>
    );
  }
}
