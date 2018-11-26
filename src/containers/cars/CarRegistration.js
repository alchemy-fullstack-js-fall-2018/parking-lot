import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './CarRegistration.css';
import { registerCars } from '../../actions/cars';
import ROUTES from '../../routes';


class CarRegistration extends PureComponent {

  static propTypes = {
    onSubmit: PropTypes.func
  };

  state = {
    plate: '',
    make: '',
    model: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  onSubmit = event => {
    const { onSubmit } = this.props;
    const { plate, make, model } = this.state;

    event.preventDefault();
    onSubmit(plate, make, model);
    this.props.history.push(ROUTES.CAR.linkTo(plate));
  };

  render() {


    return (
      <Fragment>
        <h3 className={styles.header}>Register a New Car</h3>
        <div className={styles.wrapper}>
          <form className={styles.form}>
            <label className={styles.label} htmlFor='plate'>Plate:</label><br/>
            <input id='plate' type='text' name='plate' onChange={this.handleChange} required/><br/>

            <label className={styles.label} htmlFor='make'>Make:</label><br/>
            <input id='make' type='text' name='make' onChange={this.handleChange} required/><br/>

            <label className={styles.label} htmlFor='model'>Model:</label><br/>
            <input id='model' type='text' name='model' onChange={this.handleChange} required/><br/>

            <button className={styles.button} onClick={this.onSubmit}>Add</button>
          </form>
        </div>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: (plate, make, model) => dispatch(registerCars(plate, make, model))
});

export default connect(
  null,
  mapDispatchToProps
)(CarRegistration);
