import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

    const totalPopulation = cart.reduce( (sum, country)=> sum + country.population, 0);
    return (
        <div>
            <h2>This is cart:  {props.cart.length}</h2>
            <h3>Total Population: {totalPopulation}</h3>
        </div>
    );
};

export default Cart;