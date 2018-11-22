import AllCars from './containers/cars/AllCars';
import Car from './containers/cars/Car';

export default {
  CARS: {
    path: '/cars',
    Component: AllCars,
    linkTo: () => '/cars'
  },
  CAR: {
    path: '/cars/:id',
    Component: Car,
    linkTo: id => `/cars/${id}`
  }
};
