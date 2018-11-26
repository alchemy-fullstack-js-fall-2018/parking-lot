import React from 'react';
import { shallow } from 'enzyme';
import Car from './Car';

describe ('tests for Car component', () => {

  it('renders a Car component', () => {
    const car = {
      plate: 'ZZZ000',
      make: 'Plymouth',
      model:  'Edsel',
      color: 'pink'
    };
    const wrapper = shallow(<Car car={car}/>);
    expect(wrapper).toMatchSnapshot();
  });

});
