import Home from '../components/home/Home';
import AllCars from '../containers/AllCars';
import SearchAllCarsContainer from '../containers/SearchAllCarsContainer';
import LotCars from '../containers/LotCars';
import RegisterCarContainer from '../containers/RegisterCarContainer';
import SearchLotCarsContainer from '../containers/SearchLotCarsContainer';

export const ROUTES = {
  HOME: {
    path: '/',
    Component: Home,
    linkTo: () => '/'
  },
  ALL_CARS: { //do this slice first. doesn't need an action, just takes fake cars from store
    path: '/cars',
    Component: AllCars,
    linkTo: () => '/cars'
  },
  SEARCH_CARS: { //third
    path: '/cars/search',
    Component: SearchAllCarsContainer,
    linkTo: () => '/cars/search'
  },
  CREATE_CAR: { //second
    path: '/cars/create',
    Component: RegisterCarContainer,
    linkTo: () => '/cars/create'
  },
  LOT: { //fourth -- also just drawing from the store
    path: '/lot',
    Component: LotCars,
    linkTo: () => '/lot'
  },
  SEARCH_LOT: { //fifth
    path: '/lot/search',
    Component: SearchLotCarsContainer,
    linkTo: () => '/lot/search'
  }
};
