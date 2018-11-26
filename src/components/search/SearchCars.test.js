import React from 'react';
import { shallow } from 'enzyme';
import SearchCars from './SearchCars';

describe('SearchCars component', () => {
  const car = [{ make: 'Toyota', model: 'Corolla', plate: 'ABC123' }];

  it('renders a component', () => {
    const wrapper = shallow(<SearchCars car={car}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('changes the search term', () => {
    const updateSearchTerm = jest.fn();
    const wrapper = shallow(<SearchCars car={car} searchTerm={'searcher'} updateSearchTerm={updateSearchTerm} />);
    wrapper.find('#search').simulate('change', { target: { name: 'search', value: 'searched' } });
    expect(updateSearchTerm.mock.calls[0][0].target.value).toEqual('searched');
  });
});
