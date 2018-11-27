import Home from '../components/home/Home';
import AllCars from '../containers/cars/AllCars';
import CarDetail from '../containers/cars/CarDetail';
import FilteredCars from '../containers/cars/FilteredCars';
import RegisterCar from '../containers/cars/RegisterCar';
import LotCars from '../containers/lot/LotCars';

export default {
  HOME: {
    path: '/',
    component: Home,
    linkTo: () => '/'
  },
  CARS: {
    path: '/cars',
    component: AllCars,
    linkTo: () => '/cars'
  },
  CAR_DETAIL: {
    path: '/cars/:id',
    component: CarDetail,
    linkTo: id => `/cars/${id}`
  },
  CARS_SEARCH: {
    path: '/cars/search',
    component: FilteredCars,
    linkTo: () => '/cars/search'
  },
  REGISTER_CAR: {
    path: '/cars/create',
    component: RegisterCar,
    linkTo: () => '/cars/create'
  },
  LOT_CARS: {
    path: '/lot',
    component: LotCars,
    linkTo: () => '/lot'
  }
};
