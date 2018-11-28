import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { ROUTES } from '../../routes';

export default class RegisterCarForm extends PureComponent {
  static propTypes = {
    registerCar: PropTypes.func
  };

  state = {
    plate: '',
    make: '',
    model: ''
  };

  handleSubmit = e => {
    e.preventDefault();

    const { plate, make, model } = this.state;
    const { registerCar } = this.props;

    registerCar(plate, make, model);
    this.props.history.push(ROUTES.CAR_DETAIL.linkTo(plate));
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value.toUpperCase() });
  };

  render() {
    return (
      <Fragment>
        <h3>Add Your Junker to the Lot!</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="plate">Plate Info</label>
          <input
            id="plate"
            type="text"
            name="plate"
            onChange={this.handleChange}
          />

          <label htmlFor="make">Make</label>
          <input
            id="make"
            type="text"
            name="make"
            onChange={this.handleChange}
          />

          <label htmlFor="model">Model</label>
          <input
            id="model"
            type="text"
            name="model"
            onChange={this.handleChange}
          />

          <button>Good Luck!</button>
        </form>
      </Fragment>
    );
  }
}
