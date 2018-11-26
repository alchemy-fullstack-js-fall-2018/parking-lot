import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class RegisterCarForm extends PureComponent {

  static PropTypes = {
    registerCar: PropTypes.array.isRequired
  };

  state = {
    make: '',
    model: '',
    plate: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  onSubmit = event => {
    const { registerCar } = this.props;
    const { make, model, plate } = this.state;
    event.preventDefault();
    registerCar(make, model, plate);
    this.props.history.push(`/cars/${plate}`);
  };

  render() {

    <Fragment>
      <form>
        <label>
          Make:
          <input type="text" value={this.state.make} onChange={this.handleChange}/>
        </label>
        <label>
          Model:
          <input type="text" value={this.state.model} onChange={this.handleChange}/>
        </label>
        <label>
          Plate:
          <input type="text" value={this.state.plate} onChange={this.handleChange}/>
        </label>
        <button onClick={this.onSubmit}>Submit Registration</button>
      </form>
    </Fragment>
  };
};
