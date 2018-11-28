import AllCars from './containers/cars/AllCars';
import Home from './components/Home/Home';

export default {
  HOME: {
    path: '/',
    Component: Home,
    linkTo: () => '/'
  },
  CARS: {
    path: '/cars',
    Component: AllCars,
    linkTo: () => '/cars'
  }
};
