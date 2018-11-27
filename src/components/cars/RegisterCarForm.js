import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

export default class RegisterCarForm extends Component {
  static propTypes = {
    registerCar: PropTypes.func
  };

  state = {
    id: '',
    state: '',
    make: '',
    model: '',
    color: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    const { id, state, make, model, color } = this.state;
    console.log('event', event);
    event.preventDefault();
    this.props.registerCar({ id, state, make, model, color });
  };

  render() {
    const { id, state, make, model, color } = this.state;

    return (
      <Fragment>
        <h2>Registration Form</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Licence Plate:
            <input value={id} name="id" onChange={this.handleChange} />
          </label>
          <label>
            Registration State:
            <input value={state} name="state" onChange={this.handleChange} />
          </label>
          <label>
            Make:
            <input value={make} name="make" onChange={this.handleChange} />
          </label>
          <label>
            Model:
            <input value={model} name="model" onChange={this.handleChange} />
          </label>
          <label>
            Color:
            <input value={color} name="color" onChange={this.handleChange} />
          </label>
          <button>Submit</button>
        </form>
      </Fragment>
    );
  }
}
