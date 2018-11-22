import React from 'react';
import { shallow } from 'enzyme';
import CarDetail from './CarDetail';

describe('CarDetail component', () => {
  it('renders a CarDetail component', () => {
    const wrapper = shallow(<CarDetail />);
    expect(wrapper).toMatchSnapshot();

  });
});
