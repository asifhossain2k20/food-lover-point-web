import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const FoodContainer = ({food,addedFoods}) => {
    const {strMeal,strMealThumb,strInstructions,idMeal}=food;
    return (
        <div className='col-md-4'>
            <Card style={{ width: '14rem' ,height:'28rem'}}>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>
                    {strInstructions.length > 40 ? strInstructions.slice(0,50):strInstructions}...
                    </Card.Text>
                    <Button onClick={()=>addedFoods(food)} variant="primary">Add Food</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default FoodContainer;