import Home from './components/Home/Home';
import AllCars from './containers/cars/AllCars';
import CarDetail from './containers/cars/CarDetail';

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
  },
  CAR: {
    path: '/cars/:id',
    Component: CarDetail,
    linkTo: id => `/cars/${id}`
  }
};
