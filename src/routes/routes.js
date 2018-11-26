import AllCars from '../containers/cars/AllCars';
import CarDetail from '../containers/cars/CarDetail';

export default {
  CARS: {
    path: '/cars',
    component: AllCars,
    linkTo: () => '/cars'
  },
  CAR_DETAIL: {
    path: '/cars/:id',
    component: CarDetail,
    linkPath: id => `/cars/${id}`
  }
};
