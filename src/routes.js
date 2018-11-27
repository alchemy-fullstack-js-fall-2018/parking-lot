import Home from './components/Home/Home';
import AllCars from './containers/cars/AllCars';
import FilteredCars from './containers/cars/FilteredCars';
import CarDetail from './containers/cars/CarDetail';
import CarRegistration from './containers/cars/CarRegistration';
import LotCars from './containers/lot/LotCars';
import FilteredLotCars from './containers/lot/FilteredLotCars';

export default {
  HOME: {
    path: '/',
    Component: Home,
    linkTo: () => '/'
  },
  ALL_CARS: {
    path: '/cars',
    Component: AllCars,
    linkTo: () => '/cars'
  },
  SEARCH_CARS: {
    path: '/cars/search',
    Component: FilteredCars,
    linkTo: () => '/cars/search'
  },
  REGISTER_CAR: {
    path: '/cars/register',
    Component: CarRegistration,
    linkTo: () => '/cars/register'
  },
  CAR: {
    path: '/cars/:id',
    Component: CarDetail,
    linkTo: id => `/cars/${id}`
  },
  LOT_CARS: {
    path: '/lot',
    Component: LotCars,
    linkTo: () => '/lot'
  },
  SEARCH_LOT_CARS: {
    path: '/lot/search',
    Component: FilteredLotCars,
    linkTo: () => '/lot/search'
  }
};
