import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerCar } from '../../actions/cars';
import ROUTES from '../../routes';


class CarRegistration extends PureComponent {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  state = {
    plate: '',
    make: '',
    model: '',
    color: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    const { plate, make, model, color } = this.state;
    event.preventDefault();
    this.props.onSubmit({ plate, make, model, color });
    this.props.history.push(ROUTES.CAR.linkTo(plate));
  };

  render() {
    const { plate, make, model, color } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>

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

        <p>
          <label htmlFor="color">Color: </label>
          <input type="text" name="color" value={color} onChange={this.handleChange} />
        </p>

        <button type="submit">Register</button>
      </form>
    );
  }
}

const mapStateToProps = () => {
  return { plate: '', make: '', model: '', color: '' };
};

const mapDispatchToProps = dispatch => ({
  onSubmit(car) {
    dispatch(registerCar(car));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarRegistration);
