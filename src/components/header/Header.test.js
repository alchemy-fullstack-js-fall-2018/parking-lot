import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';
jest.mock('../../routes/routes', () => {
  return {
    ROUTES: {
      CAR_SEARCH: {
        linkTo: () => 'randoString'
      },
      LOT_SEARCH: {
        linkTo: () => 'randoString2'
      },
      REGISTER: {
        linkTo: () => 'randoString3'
      }
    }
  };
});


import { MemoryRouter } from 'react-router-dom';

describe('Header component', () => {

  it('renders a Header component', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Has a title and a nav with three links', () => {
    const wrapper = shallow(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(wrapper.html()).toContain('<h1>');
    expect(wrapper.html()).toContain('<nav>');
  });
});
