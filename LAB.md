# Parking Lot

## Routes

XXX* `/` Home page
XXX* `/cars` List all registered cars
* `/cars/:id` Details about a car
* `/cars/search` Display cars. Filter by search term (input plate)
XXX* `/cars/create` Create a new car
* `/lot` List all cars in the parking lot
* `/lot/search` List all cars in the parking lot. Filter by search term

## Components

XXX* `Header.js`
  * link to `/cars/search`
  * link to `/lot/search`
  * link to `/cars/create`
XXX* `CarDetail.js`
  * Display the make/model/plate of the car
  * Display the status of the car (is it in the lot)
  * Display the numbers of times the car has used the lot
  * Display a button to either add the car to a lot or remove it
XXX* `Car.js`
  * Presentational component
  * Display the make/model/plate of a car
  * Link to `CarDetail`
XXX* `Cars.js`
  * Presentational component
  * Display a list of `Car` components
XXX* `RegisterCarForm.js`
  * Presentational component
  * Form to gather make, model, plate of a car.
  * `onSubmit` calls a function from props
  * It should handle `preventDefault()` on its own
  * Redirect to `CarDetail`
* `SearchCars.js`
  * Presentational component
  * text input for search
  * Displays `Cars` list
XXX* `Home.js`
  * Presentational component
  * Acts as the home page

## Containers

* `CarDetailContainer.js`
  * Container
  * maps a car to the `CarDetail` component
  * maps `LOT_CAR_ARRIVED` to the `CarDetail` component
  * maps `LOT_CAR_DEPARTED` to the `CarDetail` component
XXX* `RegisterCarContainer.js`
  * Container
  * maps `REGISTER_CAR` to the `RegisterCarForm` component
*XXX `AllCars.js`
  * Container
  * maps all cars into the `Cars` component
* `LotCars.js`
  * Container
  * maps cars currently on a lot into the `Cars` component
* `SearchAllCarsContainer.js`
  * Container
  * maps cars by a search term into the `SearchCars` component
  * maps `CAR_UPDATE_CAR_SEARCH_TERM` into the `SearchCars` component
* `SearchLotCarsContainer.js`
  * Container
  * maps cars current on a lot by a search term into the `SearchCars` component
  * maps `LOT_UPDATE_CAR_SEARCH_TERM` into the `SearchCars` component

## Reducers

* `cars.js`
  * reducer for all cars
  * contains all created cars
  * contain searchTerm
  * Handles `REGISTER_CAR`, `CAR_UPDATE_CAR_SEARCH_TERM`
* `lot.js`
  * reducer containing state of the lot
  * has cars in the lot
  * contain searchTerm
  * `Handles `LOT_UPDATE_CAR_SEARCH_TERM`, `LOT_CAR_ARRIVED`, `LOT_CAR_DEPARTED`
* `lotUse.js`
  * reducer containing lot use state
* `index.js`
  * combine `cars.js`, `lot.js`, `lotUse.js`
  * Handles `LOT_CAR_ARRIVED`

## Selectors

* `cars.js`
  * `getCars(state)`
  * `getCarsBySearch(state)`
* `lot.js`
  * `getLotCars(state)`
  * `getLotCarsBySearch(state)`
* `lotUse.js`
  * `getTimesInLot(state, id)`

## Actions

XXX* `REGISTER_CAR`
  * Used to create a new car in the state
* `CAR_UPDATE_CAR_SEARCH_TERM`
  * Used to update the car search term
* `LOT_UPDATE_CAR_SEARCH_TERM`
  * Used to update the lot search term
* `LOT_CAR_ARRIVED`
  * Used to add a car to the lot
* `LOT_CAR_DEPARTED`
  * Used to remove a car from the lot

## Tests

* Snapshot tests (1 per component, not containers)
* Enzyme tests
  * Write a test for each thing a component should Display (from the component section above)
  * `RegisterCarForm` call the onSubmit function onSubmit.
  * `SearchCars` call an onChange function
* Unit test all reducers, action creators, and selectors

## Rubric

* Components: 5 points (0.5 point each. 1 points for `RegisterCarForm` and `SearchCars`)
* Containers: 5 points (1 points each. 0.5 point for `AllCars` and `LotCars`)
* Snapshot Tests: 1 points
* Enzyme Tests: 2 points (about 0.25 each)
* Unit Tests: 2 points
* Reducers: 2 points
* Action Creators: 1 point
* Selectors: 2 points (0.5 each)