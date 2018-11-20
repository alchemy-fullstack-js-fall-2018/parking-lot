import { combineReducers } from 'redux';
import carsReducer from './cars';
import lotReducer from './lot';
import lotUseReducer from './lotUse';

export default combineReducers({
  cars: carsReducer,
  lot: lotReducer,
  lotUse: lotUseReducer
});
