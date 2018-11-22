import React from 'react';
import { shallow } from 'enzyme';
import Cars from './Cars';

describe('Cars component', () => {

  const cars = [{ make: 'Toyota', model: 'Corolla', plate: 'ABC123' }];

  it('matches snapshot', () => {
    const wrapper = shallow(<Cars cars={cars}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
