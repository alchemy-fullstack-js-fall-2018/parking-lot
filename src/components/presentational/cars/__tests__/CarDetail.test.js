import React from 'react';
import { shallow } from 'enzyme';
import CarDetail from '../CarDetail.jsx';

describe('<CarDetail />', () => {
  test('renders', () => {
    const carDepartedFn = jest.fn();
    const carArrivedFn = jest.fn();
    const car = {
      plate: 'abcdef',
      make: 'Ford',
      model: 'F150',
      inLot: false,
      lotUses: 5,
      id: '123-123-123-123',
    };
    const wrapper = shallow(
      <CarDetail
        car={car}
        carDeparted={carDepartedFn}
        carArrived={carArrivedFn}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
