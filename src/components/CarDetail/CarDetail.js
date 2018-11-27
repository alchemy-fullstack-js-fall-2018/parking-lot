import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './CarDetail.css';

export default class CarDetail extends Component {

  static propTypes = {
    car: PropTypes.object.isRequired,
    carArrives: PropTypes.func.isRequired,
    carDeparts: PropTypes.func.isRequired
  };

  render() {
    const { plate, color, make, model, lotUseCount, isInLot } = this.props.car;
    const { carArrives, carDeparts } = this.props;
    const status = isInLot ? 'Parked' : 'Absent';

    return (
      <div>
        <h2>Car Detail</h2>
        <p><span className={styles.bold}>Plate:</span> {plate}</p>
        <p><span className={styles.bold}>Description:</span> {color} {make} {model}</p>
        <p><span className={styles.bold}>Times in lot:</span> {lotUseCount}</p>
        <p><span className={styles.bold}>Status:</span> {status}</p>
        {isInLot && <button onClick={() => carDeparts(plate)}>Car has departed</button>}
        {!isInLot && <button onClick={() => carArrives(plate)}>Car has arrived</button>}
      </div>
    );
  }

}
