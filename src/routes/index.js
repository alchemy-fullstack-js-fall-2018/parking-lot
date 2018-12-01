import About from '../components/presentational/about/About.jsx';
import Home from '../components/presentational/home/Home.jsx';
import CarListAll from '../components/container/cars/CarListAll';
import CarListLot from '../components/container/cars/CarListLot';
import CarSearchAll from '../components/container/cars/CarSearchAll';
import CarSearchLot from '../components/container/cars/CarSearchLot';
import CarDetail from '../components/container/cars/CarDetail';
import CarForm from '../components/container/cars/CarForm';

export const ROUTES = {
  ABOUT: {
    path: '/about/',
    Component: About,
    linkTo: () => '/about'
  },
  HOME: {
    path: '/home/',
    Component: Home,
    linkTo: () => '/home'
  },
  CARS: {
    path: '/cars/',
    Component: CarListAll,
    linkTo: () => '/cars'
  },
  LOT: {
    path: '/lot/',
    Component: CarListLot,
    linkTo: () => '/lot'
  },
  CAR_DETAIL: {
    path: '/cars/:id',
    Component: CarDetail,
    linkTo: id => `/cars/${id}`
  },
  CAR_FORM: {
    path: '/cars/new',
    Component: CarForm,
    linkTo: () => '/cars/new'
  },
  CAR_SEARCH_ALL: {
    path: '/cars/search',
    Component: CarSearchAll,
    linkTo: () => '/cars/search'
  },
  CAR_SEARCH_LOT: {
    path: '/lot/search',
    Component: CarSearchLot,
    linkTo: () => '/lot/search'
  },
};
