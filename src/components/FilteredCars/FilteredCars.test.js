import React from 'react';
import { shallow } from 'enzyme';
import FilteredCars from './FilteredCars';

jest.mock('../../routes');

describe ('tests for FilteredCars component', () => {
  const props = {
    summary: 'Test FilteredCars',
    searchTerm: 'Acclaim',
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
  const updateSearchTerm = jest.fn();

  it('renders a FilteredCars component', () => {
    const wrapper = shallow(<FilteredCars
      cars={props.cars}
      searchTerm={props.searchTerm}
      updateSearchTerm={updateSearchTerm}
      summary={props.summary}
    />);
    expect(wrapper).toMatchSnapshot();
  });

});
