import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import Cars from '../../components/Cars/Cars';

export default class FilteredCars extends PureComponent {
  static propTypes = {
    cars: PropTypes.array.isRequired,
    searchTerm: PropTypes.string.isRequired,
    updateSearchTerm: PropTypes.func.isRequired,
    summary: PropTypes.string
  };

  render() {
    const { cars, searchTerm, updateSearchTerm, summary } = this.props;
    return (
      <Fragment>
        <form>
          <label htmlFor="searchTerm">Search: </label>
          <input type="text" value={searchTerm} onChange={updateSearchTerm} />
        </form>
        <Cars cars={cars} summary={summary}/>
      </Fragment>
    );
  }
}
