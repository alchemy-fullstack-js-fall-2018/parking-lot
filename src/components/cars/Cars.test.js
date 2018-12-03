import React from 'react';
import { shallow } from 'enzyme';
import Cars from './Cars';
jest.mock('../../routes/routes.js');

describe('Cars snapshot', () => {
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

    const wrapper = shallow(<Cars cars={cars} totalCars={totalCars} />);
    expect(wrapper).toMatchSnapshot();
  });
});
