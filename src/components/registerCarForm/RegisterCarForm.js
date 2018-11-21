import React, { PureComponent, Fragment } from 'react';

export default class RegisterCarForm extends PureComponent {

  state = {
    make: 'Toyota',
    model: '',
    plate: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {


    return (
      <Fragment>
        <h1>Register a New Car</h1>
        <form>
          <label htmlFor='make'>Make</label>
          <input id='make' type='text' name='make' onChange={this.handleChange}/>

          <label htmlFor='model'>Model</label>
          <input id='model' type='text' name='model' onChange={this.handleChange}/>

          <label htmlFor='plate'>Plate Info</label>
          <input id='plate' type='text' name='plate' onChange={this.handleChange}/>

          <button onClick={this.handleSubmit}>Register</button>
        </form>
      </Fragment>
    );
  }
}
