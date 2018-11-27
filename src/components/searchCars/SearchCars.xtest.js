import React from 'react';
import SearchCars from './SearchCars';
import { shallow } from 'enzyme';
import Car from '../cars/Car';

describe('SearchCars', () => {
  // const car1 = <Car
  //   make={'Honda'}
  //   model={'Civic'}
  //   plate={'ham555'}
  // />;

  const car2 = <Car
    make={'Toyota'}
    model={'Camry'}
    plate={'LANGERS'}
  />;

  it('renders the searched cars', () => {
    const wrapper = shallow(
      <SearchCars cars={car2}
        searchTerm={'Toyota'}
        updateSearchTerm={() => {}}
      />);
    expect(wrapper).toMatchSnapshot();
  });
});
