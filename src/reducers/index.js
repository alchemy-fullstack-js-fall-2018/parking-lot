import { combineReducers } from 'redux';
import carReducer from './cars';
import lotReducer from './lot';
import lotUseReducer from './lotUse';

export default combineReducers({
  cars: carReducer,
  lot: lotReducer,
  lotUse: lotUseReducer
});
