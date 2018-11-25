import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerCars } from '../../actions/cars';
import ROUTES from '../../routes';


class CarRegistration extends PureComponent {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  state = {
    plate: '',
    make: '',
    model: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    const { plate, make, model } = this.state;
    event.preventDefault();
    this.props.onSubmit({ plate, make, model });
    this.props.history.push(ROUTES.CAR.linkTo(plate));
  };

  render() {
    const { plate, make, model } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>New Registration</h2>

        <p>
          <label htmlFor="plate">Plate: </label>
          <input type="text" name="plate" value={plate} onChange={this.handleChange} />
        </p>

        <p>
          <label htmlFor="make">Make: </label>
          <input type="text" name="make" value={make} onChange={this.handleChange} />
        </p>

        <p>
          <label htmlFor="model">Model: </label>
          <input type="text" name="model" value={model} onChange={this.handleChange} />
        </p>

        <button type="submit">Register</button>
      </form>
    );
  }
}

const mapStateToProps = () => {
  return { plate: '', make: '', model: '' };
};

const mapDispatchToProps = dispatch => ({
  onSubmit(car) {
    dispatch(registerCars(car));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarRegistration);
