import AllCars from './containers/cars/AllCars';
import Home from './components/Home/Home';
import SearchAllCarsContainer from './containers/search/SearchAllCarsContainer';

export const ROUTES = {
  HOME: {
    path: '/',
    Component: Home,
    linkTo: () => '/'
  },
  CARS: {
    path: '/cars',
    Component: AllCars,
    linkTo: () => '/cars'
  },
  CAR_SEARCH: {
    path: '/cars/search',
    Component: SearchAllCarsContainer,
    linkTo: () => '/cars/search'
  }
};
