import React from 'react';
import { shallow } from 'enzyme';
import CarDetail from './CarDetail';

describe ('tests for Car Detail component', () => {

  const parkedCar = {
    plate: 'ZZZ000',
    make: 'Plymouth',
    model:  'Edsel',
    color: 'pink',
    lotUseCount: 2,
    isInLot: true
  };
  const absentCar = { ...parkedCar, isInLot: false };
  const carArrives = jest.fn();
  const carDeparts = jest.fn();

  it('renders a CarDetail component', () => {
    const wrapper = shallow(
      <CarDetail
        car={parkedCar}
        carArrives={carArrives}
        carDeparts={carDeparts}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('the "Car has arrived" button is the only visible button when car is not parked', () =>{
    const wrapper = shallow(
      <CarDetail
        car={absentCar}
        carArrives={carArrives}
        carDeparts={carDeparts}
      />
    );
    expect(wrapper.find('button')).toHaveLength(1);
    expect(wrapper.find('button').at(0).text()).toEqual('Car has arrived');
  });

  it('the "Car has departed" button is the only visible button when car is parked', () =>{
    const wrapper = shallow(
      <CarDetail
        car={parkedCar}
        carArrives={carArrives}
        carDeparts={carDeparts}
      />
    );
    expect(wrapper.find('button')).toHaveLength(1);
    expect(wrapper.find('button').at(0).text()).toEqual('Car has departed');
  });

  it('calls carArrives with plate number when "Car has arrived" button is clicked', () => {
    const wrapper = shallow(
      <CarDetail
        car={absentCar}
        carArrives={carArrives}
        carDeparts={carDeparts}
      />
    );
    wrapper.find('button').at(0).simulate('click');
    expect(carArrives.mock.calls[0][0]).toEqual(absentCar.plate);
  });

  it('calls carDeparts with plate number when "Car has departed" button is clicked', () => {
    const wrapper = shallow(
      <CarDetail
        car={parkedCar}
        carArrives={carArrives}
        carDeparts={carDeparts}
      />
    );
    wrapper.find('button').at(0).simulate('click');
    expect(carDeparts.mock.calls[0][0]).toEqual(parkedCar.plate);
  });

});
