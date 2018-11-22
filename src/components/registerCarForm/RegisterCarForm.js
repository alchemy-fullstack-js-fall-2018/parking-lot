import React from 'react';

const RegisterCarForm = ({ registerNewCar }) => {
  return (
    <form>
      <h3>Register a New Car</h3>

      <label htmlFor="make">Manufacturer:</label>
      <input type="text" name="make"></input>

      <label htmlFor="model">Model:</label>
      <input type="text" name="model"></input>

      <label htmlFor="plate">Plate Number:</label>
      <input type="text" name="plate"></input>

      <button onSubmit={registerNewCar}>Submit</button>
    </form>
  );
};

export default RegisterCarForm;
