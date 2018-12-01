import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import CarList from '../CarList.jsx';

jest.mock('../../../../routes');

// jest.mock('../../../../routes', () => ({
//   ROUTES: {
//     CAR_DETAIL: {
//       linkTo: () => '/'
//     }
//   }
// }));

describe('<CarList />', () => {
  test('renders', () => {
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
      <CarList cars={cars} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
