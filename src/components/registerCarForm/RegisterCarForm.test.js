import React from 'react';
import { shallow } from 'enzyme';
import RegisterCarForm from './RegisterCarForm';

describe('RegisterCarForm component', () => {
  it('renders a component', () => {
    const wrapper = shallow(<RegisterCarForm />);
    expect(wrapper).toMatchSnapshot();
  });

  it('has 3 input forms', () => {
    const wrapper = shallow(<RegisterCarForm />);
    expect(wrapper.find('input')).toHaveLength(3);
  });
});
