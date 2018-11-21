import React from 'react';
import { shallow } from 'enzyme';
import Cars from './Cars';

describe('Cars', () => {
  let wrapper;
  beforeEach(() => {
    const cars = [{
      make: 'a make',
      model: 'a model',
      plate: 'a plate'
    }];
    wrapper = shallow(<Cars cars={cars}/>);
  });

  it('renders Cars', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
