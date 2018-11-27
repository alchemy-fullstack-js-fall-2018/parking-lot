import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

describe('Header component tests', () => {
  const wrapper = shallow(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  test('header snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('contains a nav and a header', () => {
    expect(wrapper.html()).toContain('<nav');
    expect(wrapper.html()).toContain('<h1>');
  });

});
