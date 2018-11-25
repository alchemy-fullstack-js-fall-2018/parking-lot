import Home from './components/home/Home';
import AllCars from './containers/cars/AllCars';
import FilteredCars from './containers/cars/FilteredCars';
import CarDetail from './containers/cars/CarDetail';
import CarRegistration from './containers/cars/CarRegistration';
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
  CAR_SEARCH: {
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
  }
};
