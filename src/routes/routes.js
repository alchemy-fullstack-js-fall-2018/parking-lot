import Home from '../components/home/Home';
import RegisterCarContainer from '../containers/cars/RegisterCarContainer';
import AllCars from '../containers/cars/AllCars';
import CarDetailContainer from '../../src/containers/cars/CarDetailContainer';

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
  }
};
