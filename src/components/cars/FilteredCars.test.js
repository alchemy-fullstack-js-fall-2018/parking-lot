import React from 'react';
import { shallow } from 'enzyme';
import FilteredCars from './FilteredCars';

describe('Filtered Cars', () => {
  let wrapper;
  beforeEach(() => {
    const cars = [{
      make: 'a make',
      model: 'a model',
      plate: 'a plate'
    }];
    const searchTerm = 'a search term';
    const updateSearchTerm = jest.fn();
    wrapper = shallow(<FilteredCars cars={cars} searchTerm={searchTerm} updateSearchTerm={updateSearchTerm}/>);
  });
  it('renders', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
