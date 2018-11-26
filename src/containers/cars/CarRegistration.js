import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
        <h3>Register a New Car</h3>
        <form>
          <label htmlFor='plate'>Plate</label>
          <input id='plate' type='text' name='plate' onChange={this.handleChange}/>

          <label htmlFor='make'>Make</label>
          <input id='make' type='text' name='make' onChange={this.handleChange}/>

          <label htmlFor='model'>Model</label>
          <input id='model' type='text' name='model' onChange={this.handleChange}/>

          <button onClick={this.onSubmit}>Add</button>
        </form>
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
