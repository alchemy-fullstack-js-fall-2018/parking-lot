import React from 'react';
import RegisterCarForm from './RegisterCarForm';
import { shallow } from 'enzyme';

describe('RegisterCarForm', () => {
  it('renders a form with inputs for make, model, and plate', () => {
    const wrapper = shallow(<RegisterCarForm/>);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('input')).toHaveLength(3);
  });
});
