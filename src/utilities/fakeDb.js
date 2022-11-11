const addToDb=id=>{
    let foodCart={};
    const storedCart=localStorage.getItem('food-cart');
    if(storedCart){
        foodCart=JSON.parse(storedCart);
    }
    const quantity=foodCart[id];
    if(quantity){
        const newQuantity=quantity+1;
        foodCart[id]=newQuantity;
    }
    else{
        foodCart[id]=1;
    }
    localStorage.setItem('food-cart',JSON.stringify(foodCart))
}

const getStoredCart=()=>{
    let foodCart={};
    const storedCart=localStorage.getItem('food-cart')
    if(storedCart){
        foodCart=JSON.parse(storedCart);
    }
    return foodCart;
}


export {addToDb,getStoredCart};