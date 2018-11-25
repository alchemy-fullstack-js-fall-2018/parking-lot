import Home from './components/home/Home';
import AllCars from './containers/AllCars';
import CarDetailContainer from './containers/CarDetailContainer';
import SearchCars from './components/searchCar/SearchCar';
import RegisterCarContainer from './components/registerCarForm/RegisterCarForm';
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
  CARDETAIL: {
    path: '/cars/:id',
    Component: CarDetailContainer,
    linkTo: () => `/cars/${id}`
  },
  SEARCH: {
    path: '/cars/search',
    Component: SearchCars,
    linkTo: () => '/cars/search'
  },
  REGISTER: {
    path: '/cars/create',
    Component: RegisterCarContainer,
    linkTo: () => '/cars/create'
  },
  ALLLOT: {
    path: '/lot',
    Component: LotCars,
    linkTo: () => '/lot'
  },
  LOTSEARCH: {
    path: 'lot/search',
    Component: SearchLot,
    linkTo: () => '/lot/search'
  }
}
