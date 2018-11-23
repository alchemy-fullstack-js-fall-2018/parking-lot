import Home from './components/Home/Home';
import AllCars from './containers/cars/AllCars';
import FilteredCars from './containers/cars/FilteredCars';
import CarDetail from './containers/cars/CarDetail';

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
  CAR: {
    path: '/cars/:id',
    Component: CarDetail,
    linkTo: id => `/cars/${id}`
  }
};
