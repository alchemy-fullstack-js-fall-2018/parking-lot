import React, { Component } from 'react';

const Car = ({ make, model, plate }) => {
  return (
    <li>
      {make} - {model} - {plate}
    </li>
  );
};

export default Car;
