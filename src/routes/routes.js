import Home from '../components/home/Home';
import AllCars from '../containers/AllCars';
import SearchAllCarsContainer from '../containers/SearchAllCarsContainer';
import Lot from '../containers/LotCars';
import SearchLotCarsContainer from '../containers/SearchLotCarsContainer';

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
  SEARCH_CARS: {
    path: '/cars/search',
    Component: SearchAllCarsContainer,
    linkTo: () => '/cars/search'
  },
  CREATE_CAR: {
    path: '/cars/create',
    Component: /*WHICH COMPONENT*/ ,
    linkTo: () => '/cars/create'
  },
  LOT: {
    path: '/lot',
    Component: LotCars,
    linkTo: () => '/lot'
  },
  SEARCH_LOT: {
    path: '/lot/search',
    Component: SearchLotCarsContainer,
    linkTo: () => '/lot/search'
  }
};
