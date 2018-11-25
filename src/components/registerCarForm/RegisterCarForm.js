import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


export default class RegisterCarForm extends PureComponent {
  static propTypes = {
    registerCar: PropTypes.func.isRequired
  };

  state = {
    make: '',
    model: '',
    plate: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    const { registerCar } = this.props;
    const { make, model, plate } = this.state;
    event.preventDefault();
    registerCar(make, model, plate);
    // this.props.history.push(`/cars/${plate}`);
  };


  render() {
    return (
      <form>
        <h3>Register a New Car</h3>

        <label htmlFor="make">Manufacturer:</label>
        <input type="text" name="make" onChange={this.handleChange} />

        <label htmlFor="model">Model:</label>
        <input type="text" name="model" onChange={this.handleChange} />

        <label htmlFor="plate">Plate Number:</label>
        <input type="text" name="plate" onChange={this.handleChange} />

        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}
