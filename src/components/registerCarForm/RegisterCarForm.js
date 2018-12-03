import React, { PureComponent, Fragment } from 'react';
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

  onSubmit = event => {
    const { registerCar } = this.props;
    const { make, model, plate } = this.state;
    event.preventDefault();
    registerCar(make, model, plate);
    this.props.history.push(`/cars/${plate}`);
  };

  render() {
    return(


    <Fragment>
      <form onSubmit={this.onSubmit}>
        <label>
          Make:
          <input id="make" name="make" type="text" onChange={this.handleChange}/>
        </label>
        <label>
          Model:
          <input id="model" name="model" type="text" onChange={this.handleChange}/>
        </label>
        <label>
          Plate:
          <input id="plate" name="plate" type="text" onChange={this.handleChange}/>
        </label>
        <button>Submit Registration</button>
      </form>
    </Fragment>
    )
  };
};
