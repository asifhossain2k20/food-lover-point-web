import React from 'react';

const Cart = ({cart}) => {
    console.log(cart);
    return (
        <div>
            <h2>Selected Items</h2>
            <ul>
                {
                    cart.map(food=><li>{food.strMeal}</li>)
                }
            </ul>
        </div>
    );
};

export default Cart;