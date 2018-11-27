import AllCars from '../containers/cars/AllCars';
import CarDetail from '../containers/cars/CarDetail';
import FilteredCars from '../containers/cars/FilteredCars';

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
  },
  CARS_SEARCH: {
    path: '/cars/search',
    component: FilteredCars,
    linkPath: () => '/cars/search'
  }
};
