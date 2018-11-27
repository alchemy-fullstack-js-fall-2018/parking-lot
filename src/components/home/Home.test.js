import Home from './Home';
import React from 'react';
import { shallow } from 'enzyme';

describe('Home component', () => {

  it('renders a Home component', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
