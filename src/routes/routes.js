import Home from '../components/home/Home';
import RegisterCarContainer from '../containers/cars/RegisterCarContainer';
import AllCars from '../containers/cars/AllCars';

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
  }
};
