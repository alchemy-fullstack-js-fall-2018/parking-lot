import React from 'react';
import { shallow } from 'enzyme';
import CarRegistration from './CarRegistration';

jest.mock('../../routes');

describe ('CarRegistration component', () => {

  let onSubmit = jest.fn();
  let wrapper;
  let car = {
    plate: 'ABCD1234',
    make: 'Tesla',
    model:  'X',
  };
  beforeEach(() => {
    wrapper = shallow(<CarRegistration onSubmit={onSubmit} history={[]} />);
  });

  it('renders a CarRegistration component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('submits a car', () => {
    wrapper.find('input').at(0).simulate('change', { target: { name: 'plate', value: car.plate } });
    wrapper.find('input').at(1).simulate('change', { target: { name: 'make', value: car.make } });
    wrapper.find('input').at(2).simulate('change', { target: { name: 'model', value: car.model } });
    wrapper.find('button').simulate('click', { preventDefault: jest.fn() });
    expect(onSubmit.mock.calls[0][0]).toEqual(car.plate);
  });

});
