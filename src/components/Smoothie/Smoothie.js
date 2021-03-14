import React from 'react';
import styleCss from './Smoothie.module.css'
import SmoothieIngredient from '../../components/Smoothie/SmoothieIngredient/SmoothieIngredient';

const smoothie = (props) => {
  
    let transformedInredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map(( _,i) => {return <SmoothieIngredient key={igKey + i} type={igKey}/>;});
    }).reduce((arr, el) => {
        return arr.concat(el)
    }, []);
    //console.log(transformedInredients)
    if(transformedInredients.length === 0){
        transformedInredients = <p>Please, start adding ingredients!</p>
    }

    //console.log(transformedInredients);
    return(
        <div className={styleCss.Smoothie}>
            <SmoothieIngredient type="lid"/>
            {transformedInredients}
            <SmoothieIngredient type="glass"/>
            <SmoothieIngredient type="stand"/>
        </div>
    );
}; 

 
export default smoothie;