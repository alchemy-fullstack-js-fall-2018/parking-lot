import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import CarSearch from '../CarSearch.jsx';

jest.mock('../../../../routes');

// jest.mock('../../../../routes', () => ({
//   ROUTES: {
//     CAR_DETAIL: {
//       linkTo: () => '/'
//     },
//     CAR_SEARCH_ALL: {
//       linkTo: () => '/asdf'
//     }
//   }
// }));

describe('<CarSearch />', () => {
  test('renders', () => {
    const updateSearchFn = jest.fn();
    const cars = [
      {
        plate: 'abcdef',
        make: 'Ford',
        model: 'F150',
        inLot: false,
        lotUses: 5,
        id: '123-123-123-123',
      },
      {
        plate: 'xyzabc',
        make: 'Chevy',
        model: 'S10',
        inLot: true,
        lotUses: 8,
        id: '321-321-321-321',
      }
    ];
    const wrapper = shallow(
      <CarSearch cars={cars} updateSearch={updateSearchFn} history={[]} location={{ search:'asdf' }} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
