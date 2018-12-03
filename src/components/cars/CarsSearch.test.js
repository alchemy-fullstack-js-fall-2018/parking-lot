import React from 'react';
import { shallow } from 'enzyme';
import CarsSearch from './CarsSearch';
jest.mock('../../routes/routes.js');

describe('CarsSearch snapshot', () => {
  it('matches previous snapshot', () => {
    const cars = [
      {
        id: 'ABC123',
        make: 'Honda',
        model: 'Accord',
        color: 'white',
        state: 'OR'
      },
      {
        id: 'DEF456',
        make: 'Toyota',
        model: 'Camry',
        color: 'silver',
        state: 'OR'
      },
      {
        id: 'GHI789',
        make: 'Hyundai',
        model: 'Elantra',
        color: 'blue',
        state: 'WA'
      }
    ];

    const totalCars = 4;
    const searchTerm = 'ABC';
    const updateSearchTerm = jest.fn();

    const wrapper = shallow(
      <CarsSearch
        cars={cars}
        searchTerm={searchTerm}
        updateSearchTerm={updateSearchTerm}
        totalCars={totalCars}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
