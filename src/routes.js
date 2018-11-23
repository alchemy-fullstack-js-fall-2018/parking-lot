import AllCars from './containers/cars/AllCars';
import CarDetail from './containers/cars/CarDetail';

export default {
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
