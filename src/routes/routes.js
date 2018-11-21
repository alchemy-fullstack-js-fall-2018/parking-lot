import Home from '../components/home/Home';
import RegisterCarForm from '../components/registerCarForm/RegisterCarForm';

export const ROUTES = {
  HOME: {
    path: '/',
    Component: Home,
    linkTo: () => '/'
  },
  REGISTER: {
    path: '/cars/register',
    Component: RegisterCarForm,
    linkTo: () => '/cars/register'
  }
};
