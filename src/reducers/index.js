import { combineReducers } from 'redux';
import cars from './cars';
import lot from './lot';

export default combineReducers({
  cars,
  lot
});
