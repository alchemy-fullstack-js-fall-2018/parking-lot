import React from 'react';
import { shallow } from 'enzyme';
import Car from './Car';

describe ('Car snapshot', () => {
  it('matches previous snapshot', () => {
    const car = {
      id: 'ABC123',
      make: 'Honda',
      model: 'Accord',
      color: 'white',
      state: 'OR',
    };

    const wrapper = shallow(<Car car={car} />);
    expect(wrapper).toMatchSnapshot();
  });
});
