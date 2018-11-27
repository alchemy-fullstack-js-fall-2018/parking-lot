import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ROUTES from '../../routes';


export default class CarRegistration extends PureComponent {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    history: PropTypes.array
  };

  state = {
    plate: '',
    make: '',
    model: '',
    color: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    const { plate, make, model, color } = this.state;
    event.preventDefault();
    this.props.onSubmit({ plate, make, model, color });
    this.props.history.push(ROUTES.CAR.linkTo(plate));
  };

  render() {
    const { plate, make, model, color } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>New Registration</h2>

        <p>
          <label htmlFor="plate">Plate: </label>
          <input type="text" name="plate" value={plate} onChange={this.handleChange} />
        </p>

        <p>
          <label htmlFor="make">Make: </label>
          <input type="text" name="make" value={make} onChange={this.handleChange} />
        </p>

        <p>
          <label htmlFor="model">Model: </label>
          <input type="text" name="model" value={model} onChange={this.handleChange} />
        </p>

        <p>
          <label htmlFor="color">Color: </label>
          <input type="text" name="color" value={color} onChange={this.handleChange} />
        </p>

        <button type="submit">Register</button>
      </form>
    );
  }
}
