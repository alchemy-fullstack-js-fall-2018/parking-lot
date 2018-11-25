import { combineReducers } from 'redux';
import carReducer from './cars';
import lotReducer from './lot';

export default combineReducers({
  cars: carReducer,
  lot: lotReducer
});
