import { connect } from 'react-redux';
import SearchCar from '../components/searchCar/SearchCar';
import { carUpdateCarSearchTerm } from '../actions/carActions';
import { getCars, getCarsBySearch } from '../selectors/cars';
