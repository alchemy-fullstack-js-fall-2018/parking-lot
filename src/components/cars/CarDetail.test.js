import React from 'react';
import { shallow } from 'enzyme';
import CarDetail from './CarDetail';
jest.mock('../../routes/routes');

describe('CarDetail component', () => {
  const car = { make: 'Toyota', model: 'Corolla', plate: 'ABC123' };
  const addToLot = jest.fn();
  const removeFromLot = jest.fn();

  it('renders a CarDetail component', () => {
    const wrapper = shallow(<CarDetail
      car={car} inLot={true}
      lotUsage={3}
      addToLot={addToLot}
      removeFromLot={removeFromLot}/>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('shows make, model, and plate of car, as well as "yes" if car is inLot and number of times in lot', () => {
    const wrapper = shallow(
      <CarDetail
        car={car}
        inLot={true}
        lotUsage={3}
        addToLot={addToLot}
        removeFromLot={removeFromLot}
      />
    );
    expect(wrapper.html()).toContain('Toyota');
    expect(wrapper.html()).toContain('Corolla');
    expect(wrapper.html()).toContain('ABC123');
    expect(wrapper.html()).toContain('Yes');
    expect(wrapper.html()).toContain(3);
  });

  it('shows "no" if car is not inLot', () => {
    const wrapper = shallow(
      <CarDetail
        car={car}
        inLot={false}
        lotUsage={3}
        addToLot={addToLot}
        removeFromLot={removeFromLot}
      />
    );
    expect(wrapper.html()).toContain('No');
  });

  it('shows "Remove from Lot" on button if car is already in the lot', () => {
    const wrapper = shallow(
      <CarDetail
        car={car}
        inLot={true}
        lotUsage={3}
        addToLot={addToLot}
        removeFromLot={removeFromLot}
      />
    );
    expect(wrapper.find('button').props().children).toContain('Remove from Lot');
  });

  it('shows "Add to Lot" on button if car is already in the lot', () => {
    const wrapper = shallow(
      <CarDetail
        car={car}
        inLot={false}
        lotUsage={3}
        addToLot={addToLot}
        removeFromLot={removeFromLot}
      />
    );
    expect(wrapper.find('button').props().children).toContain('Add to Lot');
  });
});
