import Home from './components/home/Home';
import AllCars from './containers/cars/AllCars';
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
  }
};
