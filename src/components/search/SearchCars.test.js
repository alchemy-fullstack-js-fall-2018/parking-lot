import React from 'react';
import { shallow } from 'enzyme';
import SearchCars from './SearchCars';

describe('SearchCars component', () => {
  it('renders a component', () => {
    const car = [{ make: 'Toyota', model: 'Corolla', plate: 'ABC123' }];
    const wrapper = shallow(<SearchCars car={car}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
