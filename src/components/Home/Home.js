import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../routes';


const Home = () => {

  return (
    <div>
      <h2>App Home Page</h2>
      <Link to={ROUTES.CARS.linkTo()}>See all the cars!</Link>
    </div>
  );
};

export default Home;
