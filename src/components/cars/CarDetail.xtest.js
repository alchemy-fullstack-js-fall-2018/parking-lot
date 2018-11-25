import React from 'react';
import { shallow } from 'enzyme';
import CarDetail from './CarDetail';

describe('CarDetail component', () => {
  
  it('renders a CarDetail component', () => {
    const car = [{ make: 'Toyota', model: 'Corolla', plate: 'ABC123' }];
    const lotUse = { timesInLot: 3 };

    // const wrapper = shallow(<CarDetail car={car} inLot={lot} />);
    const wrapper = shallow(<CarDetail car={car} inLot={true}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
