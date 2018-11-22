import React from 'react';
import { shallow } from 'enzyme';
import Car from './Car';

describe('Car component', () => {

  const cars = [{ make: 'Toyota', model: 'Corolla', plate: 'ABC123' }];
  
  it('matches snapshot', () => {
    const wrapper = shallow(<Car cars={cars}/>);
    expect(wrapper).toMatchSnapshot();
  });


});
