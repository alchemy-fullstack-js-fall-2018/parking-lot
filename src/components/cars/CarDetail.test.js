import React from 'react';
import { shallow } from 'enzyme';
import CarDetail from './CarDetail';

describe('CarDetail snapshot', () => {
  it('matches previous snapshot', () => {
    const car = {
      id: 'ABC123',
      make: 'Honda',
      model: 'Accord',
      color: 'white',
      state: 'OR'
    };

    const carArrived = jest.fn();
    const carDeparted = jest.fn();
    const lotUse = 3;

    const wrapper = shallow(
      <CarDetail car={car} carArrived={carArrived} carDeparted={carDeparted} lotUse={lotUse} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
