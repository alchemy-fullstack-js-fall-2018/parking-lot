import React from 'react';
import Car from './Car';
import { shallow } from 'enzyme';

describe('Car component', () => {
  it('renders a car as a list item', () => {
    const car = {
      make: 'Honda',
      model: 'Fit',
      plate: 'geoff'
    };
    const wrapper = shallow(<Car car={car} />);
    expect(wrapper).toMatchSnapshot();
  });
});
