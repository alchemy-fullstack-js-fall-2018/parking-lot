import Home from '../components/home/Home';
import AllCars from '../containers/AllCars';
import SearchAllCarsContainer from '../containers/SearchAllCarsContainer';
import

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
