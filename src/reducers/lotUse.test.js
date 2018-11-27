import reducer from './lotUse';
import fakeLotUse from '../fixtures/fakeLotUse';
import { LOT_CAR_ARRIVED } from '../actions/lot';
import { REGISTER_CAR } from '../actions/cars';


describe('lot reducer', () => {
  it('increases car lotUse on arrival', () => {
    const arrivingCar = { plate: 'ABC123' };
    const updatedState = reducer({ lotUse: fakeLotUse }, { type: LOT_CAR_ARRIVED, payload: arrivingCar });
    expect(Object.values(updatedState)[0].ABC123).toEqual(1);
  });

  it('adds a car to lotUse when car registers', () => {
    const registeringCar = { plate: 'ZYX987' };
    const updatedState = reducer({ lotUse: fakeLotUse }, { type: REGISTER_CAR, payload: registeringCar });
    expect(updatedState.lotUse.ZYX987).toEqual(0);
  });
});
