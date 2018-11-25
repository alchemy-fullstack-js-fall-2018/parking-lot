import Home from './components/home/Home';
import AllCars from './containers/AllCars';
import CarDetailContainer from './containers/CarDetailContainer';
import SearchAllCarContainer from './containers/SearchAllCarContainer';
import RegisterCarContainer from './containers/RegisterCarContainer';
import AllCars from './containers/AllCars';
import LotCars from './containers/LotCars';
import SearchLotCarsContainer from './containers/SearchLotCarsContainer';

export const ROUTES = {
  HOME: {
    path: '/',
    Component: Home,
    linkTo: () => '/'
  },
  ALLCARS: {
    path: '/cars',
    Component: AllCars,
    linkTo: () => '/cars'
  },
  CAR_DETAIL: {
    path: '/cars/:id',
    Component: CarDetailContainer,
    linkTo: () => `/cars/${id}`
  },
  CAR_SEARCH: {
    path: '/cars/search',
    Component: SearchAllCarContainer,
    linkTo: () => '/cars/search'
  },
  REGISTER: {
    path: '/cars/create',
    Component: RegisterCarContainer,
    linkTo: () => '/cars/create'
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
}
