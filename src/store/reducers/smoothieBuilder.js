import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const inritialState = {
    ingredients: null,
    totalPrice: 0 ,
    error:false,
    building:false
};

const INGREDIENT_PRICES = {
    milk: 0.8,
    juise:0.5,
    apple: 1,
    salad: 1.2,
    carrot: 1.0,
    celery: 1.2,
    kale: 1.5,
    cucumber: 0.2,
    beats: 0.8,
    plum: 1.8,
    banana: 1.0,
    stawberry: 4.5,
    orange: 2.3
}

const reducer = (state = inritialState, action) => {
    switch(action.type){
        case actionTypes.ADD_INGREDIENT:
            const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1};
            const updatedIngredients = updateObject(state.ingredients,updatedIngredient);
            const updatedState = {
                ingredients: updatedIngredients,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
                building: true
            };
            return updateObject(state, updatedState);
       case actionTypes.REMOVE_INGREDIENT:
            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
                building: true
            };
        case actionTypes.SET_INGREDIENTS:
            return{
                ...state,
                ingredients: action.ingredients,
                error:false,
                totalPrice: 0,
                building: false
            };
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return{
                ...state,
                error:true
            };
        default:
            return state;
    }
};

export default reducer;