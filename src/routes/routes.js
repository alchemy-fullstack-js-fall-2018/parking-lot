import Home from '../components/home/Home';
import RegisterCarContainer from '../containers/car/RegisterCarContainer';

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
  }
};
