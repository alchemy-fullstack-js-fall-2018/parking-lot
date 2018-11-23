import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CarDetail extends Component {

  static propTypes = {
    car: PropTypes.object.isRequired
  };

  render() {
    const { plate, color, make, model } = this.props.car;
    return (
      <div>
        <h2>Car Detail: {plate}</h2>
        <h3>{color} {make} {model}</h3>
      </div>
    );
  }

}
