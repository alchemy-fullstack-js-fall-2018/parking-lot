import React from 'react';
import SearchCars from './SearchCars';
import { shallow } from 'enzyme';

describe('SearchCars', () => {
  it('renders the searched cars', () => {
    const wrapper = shallow(
      <SearchCars cars={['car1', 'car2']}
        searchTerm={'car'}
        updateSearchTerm={() => {}}
      />);
    expect(wrapper).toMatchSnapshot();
  });
});
