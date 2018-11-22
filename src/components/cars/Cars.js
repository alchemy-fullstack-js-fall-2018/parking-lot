import React from 'react';
import PropTypes from 'prop-types';

const Cars = ({ cars, totalCars }) => {
    const carCards = cars.map(car => {
        return (
            <div key={car.id}>
                <h3>
                    {car.make} {car.model}
                </h3>
                <p>Plate: {car.id}</p>
                <p>State: {car.state}</p>
                <p>Color: {car.color}</p>
            </div>
        );
    });

    return (
        <div>
            <h2>Total Cars: { totalCars }</h2>
            {carCards}
        </div>
    );
};

Cars.propTypes = {
    cars: PropTypes.array.isRequired,
    totalCars: PropTypes.number.isRequired
};

export default Cars;
