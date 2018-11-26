import AllCars from './containers/cars/AllCars';

export default {
  CARS: {
    path: '/cars',
    Component: AllCars,
    linkTo: () => '/cars'
  }
};
