import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../routes';

const Home = () => {

  return (
    <div>
      <h2>Welcome!</h2>
      <p><Link to={ROUTES.ALL_CARS.linkTo()}>All Registered Cars</Link></p>
      <p><Link to={ROUTES.LOT_CARS.linkTo()}>All Cars in Lot</Link></p>
    </div>
  );
};

export default Home;
