import Home from '../components/home/Home';
import RegisterCarContainer from '../containers/cars/RegisterCarContainer';
import AllCars from '../containers/cars/AllCars';
import CarDetailContainer from '../../src/containers/cars/CarDetailContainer';
import SearchAllCarsContainer from '../containers/search/SearchAllCarsContainer';
import SearchLotCarsContainer from '../containers/search/SearchLotCarsContainer';
import LotCars from '../containers/lot/LotCars';

export const ROUTES = {
  HOME: {
    path: '/',
    Component: Home,
    linkTo: () => '/'
  },
  REGISTER: {
    path: '/cars/register',
    Component: RegisterCarContainer,
    linkTo: () => '/cars/register'
  },
  CARS: {
    path: '/cars',
    Component: AllCars,
    linkTo: () => '/cars'
  },
  CAR_DETAIL: {
    path: '/cars/:id',
    Component: CarDetailContainer,
    linkTo: id => `/cars/${id}`
  },
  CAR_SEARCH: {
    path: '/cars/search',
    Component: SearchAllCarsContainer,
    linkTo: () => '/cars/search'
  },
  LOT: {
    path: '/lot',
    Component: LotCars,
    linkTo: () => '/lot'
  },
  LOT_SEARCH: {
    path: '/lot/search',
    Component: SearchLotCarsContainer,
    linkTo: () => '/lot/search'
  }
};
