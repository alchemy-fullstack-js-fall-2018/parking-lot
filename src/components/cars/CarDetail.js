import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CarDetail extends Component {
  static propTypes = {
    car: PropTypes.object.isRequired
  };

  render() {
    const { make, model, plate } = this.props.car;

    return (
      <div>
        <h3>Car At a Glance</h3>
        <div>{make} - {model} - {plate}</div>
      </div>
    );
  }
}
