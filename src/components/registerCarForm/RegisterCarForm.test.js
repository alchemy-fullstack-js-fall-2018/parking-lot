import React from 'react';
import { shallow } from 'enzyme';
import RegisterCarForm from './RegisterCarForm';
jest.mock('../../routes/routes');

describe('RegisterCarForm component', () => {
  it('renders a component', () => {
    const wrapper = shallow(<RegisterCarForm />);
    expect(wrapper).toMatchSnapshot();
  });

  it('submits a cars make, model, and plate onSubmit', () => {
    const registerCar = jest.fn();
    const wrapper = shallow(
      <RegisterCarForm history={[]} registerCar={registerCar} />
    );

    wrapper.find('#make').simulate('change', { target: { name: 'make', value: 'Toyota' } });
    wrapper.find('#model').simulate('change', { target: { name: 'model', value: 'Corolla' } });
    wrapper.find('#plate').simulate('change', { target: { name: 'plate', value: 'ABC123' } });
    wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });
    expect(registerCar.mock.calls[0]).toEqual(['Toyota', 'Corolla', 'ABC123']);
  });
});
