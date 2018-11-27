import React from 'react';
import Home from './Home';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

describe('Home component tests', () => {
  const wrapper = shallow(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
  test('Home snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('contains a header', () => {
    expect(wrapper.html()).toContain('<h2>');
  });

});
