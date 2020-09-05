export const initialState = {
basket: [{
    id:"1",
    title:"Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder - 2 lbs, 907 g (Double Rich Chocolate)",
    price:2773.00,
    rating:5,
    image:"https://images-na.ssl-images-amazon.com/images/I/716uIeq4rfL._SL1500_.jpg"
    




},],
user: null,
};

export const getBasketTotal = (basket) => 
basket?.reduce((amount,item) => item.price + amount, 0 );


const reducer = (state,action) => {
    console.log(action);
switch (action.type) {
case "ADD_TO_BASKET":
    // logic for adding item to basket 
    return { 
        ...state,
        basket:  [...state.basket, action.item],
    };


case "REMOVE_FROM_BASKET":
    // logic for reemoving items fromthe baslket

    // WE CLONED THE BASKET HERE
    let newBasket = [...state.basket];

const index = state.basket.findIndex((basketItem) =>  basketItem.id === action.id);


if (index >= 0 ) {
    // item exist in basket, remove it .. 
newBasket.splice(index,1);

} else {
console.warn(
    'cant remove product (id: ${action.id}) as its not'
);

}
  


    return {...state, basket: newBasket };
    default:
        return state;
}
};

export default reducer;