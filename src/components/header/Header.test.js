import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

describe('header component', () => {
  it('renders a header', () => {
    const header = shallow(<Header/>);
    expect(header).toMatchSnapshot();
  });

  it('has three links', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper.find('a')).toHaveLength(3);
  });
});
