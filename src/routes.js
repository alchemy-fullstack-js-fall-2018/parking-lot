import Home from './components/home/Home';
import AllCars from './containers/AllCars';
import CarDetailContainer from './containers/CarDetailContainer';
import SearchAllCarContainer from './containers/SearchAllCarContainer';
import RegisterCarContainer from './containers/RegisterCarContainer';
import LotCars from './containers/LotCars';
import SearchLotCarsContainer from './containers/SearchLotCarsContainer';

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
  },
  CAR_DETAIL: {
    path: '/cars/:id',
    Component: CarDetailContainer,
    linkTo: id => `/cars/${id}`
  },
  CAR_SEARCH: {
    path: '/cars/search',
    Component: SearchAllCarContainer,
    linkTo: () => '/cars/search'
  },
  REGISTER: {
    path: '/cars/register',
    Component: RegisterCarContainer,
    linkTo: () => '/cars/register'
  },
  ALL_LOT: {
    path: '/lot',
    Component: LotCars,
    linkTo: () => '/lot'
  },
  LOT_SEARCH: {
    path: 'lot/search',
    Component: SearchLotCarsContainer,
    linkTo: () => '/lot/search'
  }
};
