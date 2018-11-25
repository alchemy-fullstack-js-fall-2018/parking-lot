import React from 'react';
import { shallow } from 'enzyme';
import CarDetail from './CarDetail';

describe('<CarDetail />', () => {
  test('renders', () => {
    const carDeparture = jest.fn();
    const carArrival = jest.fn();
    const car = {
      plate: 'abcd1234',
      make: 'ford',
      model: 'pinto',
      inLot: true,
      lotUses: 1,
    };
    const wrapper = shallow(
      <CarDetail
        car={car}
        carDeparture={carDeparture}
        carArrival={carArrival}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
