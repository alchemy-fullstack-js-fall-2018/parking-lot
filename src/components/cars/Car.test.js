import React from 'react';
import { shallow } from 'enzyme';
import Car from './Car';
jest.mock('../../routes/routes', () => {
  return {
    ROUTES: {
      CAR_DETAIL: {
        linkTo: () => 'asldkfj'
      }
    }
  };
});

describe('Car component', () => {

  const cars = [{ make: 'Toyota', model: 'Corolla', plate: 'ABC123' }];

  it('matches snapshot', () => {
    const wrapper = shallow(<Car cars={cars}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('displays make, model, and plate of a car', () => {
    const wrapper = shallow(<Car cars={cars} />);

    expect(wrapper.find('#make').props().children).toMatch(/Toyota/);
    expect(wrapper.find('#model').props().children).toMatch(/Corolla/);
    expect(wrapper.find('#plate Link').props().children).toMatch(/ABC123/);
  });
});
