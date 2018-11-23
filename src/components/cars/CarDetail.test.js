import React from 'react';
import { shallow } from 'enzyme';
import CarDetail from './CarDetail';

describe('CarDetail component', () => {
  it('renders a CarDetail component', () => {
    const car = [{ make: 'Toyota', model: 'Corolla', plate: 'ABC123' }];
    const lot = { inLot: true };
    const lotUse = { timesInLot: 3 };

    const wrapper = shallow(<CarDetail car={car} lot={lot} lotUse={lotUse}/>);
    expect(wrapper).toMatchSnapshot();
  });

  // it('displays a car\'s make, model, plate, status, and number of times car has used lot', () => {
  //   const car = { make: 'Toyota', model: 'Corolla', plate: 'ABC123', inLot: true, timesUsed: 3 };
  //   const wrapper = shallow(<CarDetail car={car}/>);
  // expect(wrapper.html())
  // });
});
