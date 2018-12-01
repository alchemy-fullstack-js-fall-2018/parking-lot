import React from 'react';
import PropTypes from 'prop-types';
import CarCard from './CarCard.jsx';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

const CarList = ({ cars }) => {

  const carList = cars.map(car => {
    return (
      <CarCard
        key={car.plate}
        make={car.make}
        model={car.model}
        plate={car.plate}
        id={car.id}
      />
    );
  });

  return (
    <div>
      <StyledDiv>
        {carList}
      </StyledDiv>
    </div>
  );
};

CarList.propTypes = {
  cars: PropTypes.array.isRequired
};

export default CarList;
