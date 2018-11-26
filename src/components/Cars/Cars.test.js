import React from 'react';
import { shallow } from 'enzyme';
import Cars from './Cars';

jest.mock('../../routes');

describe ('tests for Cars component', () => {
  const props = {
    summary: 'Test Cars',
    cars: [{
      plate: 'ZZZ000',
      make: 'Plymouth',
      model:  'Edsel',
      color: 'pink',
      lotUseCount: 2,
      isInLot: true
    },
    {
      plate: 'YYY111',
      make: 'Plymouth',
      model:  'Acclaim',
      color: 'red',
      lotUseCount: 3,
      isInLot: false
    }]
  };

  it('renders a Cars component', () => {
    const wrapper = shallow(<Cars cars={props.cars} summary={props.summary}/>);
    expect(wrapper).toMatchSnapshot();
  });

});
