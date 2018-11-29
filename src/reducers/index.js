import { combineReducers } from 'redux';
import cars from './cars';
import lot from './lot';
import lotUse from './lotUse';

export default combineReducers({
  cars,
  lot,
  lotUse
})
