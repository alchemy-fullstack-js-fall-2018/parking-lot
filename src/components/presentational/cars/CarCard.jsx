import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../routes';
import styled from 'styled-components';

const StyledDiv =  styled.div`
  margin: 5px;
  border: 1px solid black;
`;

const CarCard = ({ plate, make, model, id }) => {
  return (
    <StyledDiv>
      <p>plate: {plate}</p>
      <p>make: {make}</p>
      <p>model: {model}</p>
      <Link
        to={ROUTES.CAR_DETAIL.linkTo(id)}
      >See more information
      </Link>
    </StyledDiv>
  );
};

CarCard.propTypes = {
  plate: PropTypes.string.isRequired,
  make: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default CarCard;
