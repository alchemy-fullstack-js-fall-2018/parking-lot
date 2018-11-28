import AllCars from './containers/cars/AllCars';
import Home from './components/Home/Home';
import SearchAllCarsContainer from './containers/search/SearchAllCarsContainer';
import RegisterCarContainer from './containers/register/RegisterCarContainer';
import CarDetailContainer from './containers/cars/CarDetailContainer';

export const ROUTES = {
  HOME: {
    path: '/',
    Component: Home,
    linkTo: () => '/'
  },
  REGISTER: {
    path: '/cars/create',
    Component: RegisterCarContainer,
    linkTo: () => '/cars/create'
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
  },
  CAR_DETAIL: {
    path: '/cars/:id',
    Component: CarDetailContainer,
    linkTo: id => `/cars/${id}`
  }
};
