import React, { Component, Fragment } from 'react';
import styles from './CarDetail.css';
import PropTypes from 'prop-types';

export default class CarDetail extends Component {

  static propTypes = {
    car: PropTypes.object.isRequired,
    carArrival: PropTypes.func.isRequired,
    carDeparture: PropTypes.func.isRequired
  };

  render() {
    const { plate, make, model, lotUseCount, isInLot } = this.props.car;
    const { carArrival, carDeparture } = this.props;
    const status = isInLot ? 'in lot' : 'not in lot';

    return (
      <Fragment>
        <h2 className={styles.header}>Car Detail</h2>
        <div className={styles.outer}>
          <div className={styles.inner}>
            <div className={styles.wrapper}>
              <p><span>Plate:</span> {plate}</p>
              <p><span>Description:</span>{make} {model}</p>
              <p><span>Times in lot:</span> {lotUseCount}</p>
              <p><span>Status:</span> {status}</p>
            </div>
            {isInLot && <button className={styles.button}onClick={() => carDeparture(plate)}>Car left the lot</button>}
            {!isInLot && <button className={styles.button}onClick={() => carArrival(plate)}>Car added to the lot</button>}
          </div>
        </div>
      </Fragment>
    );
  }

}
