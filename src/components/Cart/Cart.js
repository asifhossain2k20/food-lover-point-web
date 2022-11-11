import React from 'react';

const Cart = ({cart}) => {
    return (
        <div className='p-4'>
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