import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakeDb';
import Cart from '../Cart/Cart';
import FoodContainer from '../FoodContainer/FoodContainer';

const Container = () => {
    const [foods,setFoods]=useState([]);
    const [cart,setCart]=useState([]);
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res=>res.json())
        .then(data=>{
            setFoods(data.meals)
        })
    },[])

    
    useEffect(()=>{
        const storedCart=getStoredCart();
        const savedCart=[]
        for(const id in storedCart){
            console.log(id);
            const addedFood=foods.find(food=>food.idMeal===id);
            
            if(addedFood){
                const quantity=storedCart[id];
                addedFood.quantity=quantity;
                savedCart.push(addedFood);
            }
        }
        setCart(savedCart);
    },[foods])
    const addedFoods=(selectedFood)=>{
        const exist=cart.find(food=>selectedFood.idMeal===food.idMeal);
        let newCart=[];
        if(!exist){
            selectedFood.quantity=1;
            newCart=[...cart,selectedFood];
        }
        else{
            const rest=cart.filter(product=>product.idMeal!==selectedFood.idMeal)
            exist.quantity+=1;
            newCart=[...rest,exist]
        }
        setCart(newCart);
        addToDb(selectedFood.idMeal);
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-8'>
                <h2 className='text-center'>All Food Menu</h2>
                    <div className='row'>
                        {
                            foods.map(food=><FoodContainer addedFoods={addedFoods} key={food.idMeal} food={food}></FoodContainer>)
                        }        
                    </div>
                </div>
                <div className='col-md-4'>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Container;