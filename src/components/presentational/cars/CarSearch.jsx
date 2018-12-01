import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CarList from './CarList.jsx';
import { ROUTES } from '../../../routes';
import queryString from 'querystring';

export default class CarSearch extends PureComponent {

  static propTypes = {
    cars: PropTypes.array.isRequired,
    updateSearch: PropTypes.func.isRequired
  };

  componentDidMount = () => {
    this.updateHistory({ q: '' });
    this.doSearch();
  };

  componentDidUpdate = (prevProps, prevState) => {
    if(prevProps.location.search !== this.props.location.search) {
      this.doSearch();
    }
  };

  getQuery = () => {
    return queryString.parse(this.props.location.search.slice(1));
  };

  doSearch = () => {
    const { q } = this.getQuery();
    this.props.updateSearch(q);
  };

  updateHistory = options => {
    const q = options.q || '';
    const searchQuery = queryString.stringify({ q });
    this.props.history.push({
      pathName: ROUTES.CAR_SEARCH_ALL.path,
      search: searchQuery
    });
  };

  updateSearch = event => {
    event.preventDefault();
    const q = document.getElementById('q').value;
    this.doSearch;
    this.updateHistory({ q });
  };

  render() {

    const { cars } = this.props;

    return (
      <div>
        <form onSubmit={this.updateSearch}>
          <label htmlFor="q">Search</label>
          <input id="q" name="q" type="text" />
          <button type="submit">Search</button>
        </form>
        <CarList cars={cars}/>
      </div>
    );
  }

}
