import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

describe('Header component', () => {

  it('renders a Header component', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Has a title and a nav with three links', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.html()).toContain('<h1>');
    expect(wrapper.html()).toContain('<nav>')
    expect(wrapper.find('a')).toHaveLength(3);
  });
});
