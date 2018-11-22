import AllCars from './containers/cars/AllCars';

export default {
    CARS: {
        path: '/cars',
        component: AllCars,
        linkTo: () => '/cars'
    }
};
