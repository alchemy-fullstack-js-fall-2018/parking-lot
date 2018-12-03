import React from 'react';
import { shallow } from 'enzyme';
import RegisterCarForm from './RegisterCarForm';

describe('RegisterCarForm snapshot', () => {
  it('matches previous snapshot', () => {
    const registerCar = jest.fn();

    const wrapper = shallow(<RegisterCarForm registerCar={registerCar} />);
    expect(wrapper).toMatchSnapshot();
  });
});
