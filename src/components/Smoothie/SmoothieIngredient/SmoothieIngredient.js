import React, {Component} from 'react';
import styleCss from'./SmoothieIngredient.module.css';
import PropTypes from 'prop-types';

class SmoothieIngredient extends Component {
    render(){
        let ingredient = null;

        switch(this.props.type){
            case('glass'):
                ingredient= <div className={styleCss.Glass}></div>;     
                break;
            case('lid'):
                ingredient = <div className={styleCss.Lid}></div>;
                break;
            case('stand'):
                ingredient = <div className={styleCss.Stand}></div>;
                break;
            case('stawberry'):
                ingredient = <div className={styleCss.Stawberry}></div>;
                break;
            case('salad'):
                ingredient = <div className={styleCss.Salad}></div>;
                break;
            case('kale'):
                ingredient = <div className={styleCss.Kale}></div>;
                break;
            case('celery'):
                ingredient = <div className={styleCss.Celery}></div>;
                break;
            case('cucumber'):
                ingredient = <div className={styleCss.Cucumber}></div>;
                break;
            case('beats'):
                ingredient = <div className={styleCss.Beats}></div>;
                break;
            case('grapefruit'):
                ingredient = <div className={styleCss.Grapefruit}></div>;
                break;
            case('orange'):
                ingredient = <div className={styleCss.Orange}></div>;
                break;
            case('carrot'):
                ingredient = <div className={styleCss.Carrot}></div>;
                break;
            case('apple'):
                ingredient = <div className={styleCss.Apple}></div>;
                break;
            case('banana'):
                ingredient = <div className={styleCss.Banana}></div>;
                break;
            case('plum'):
                ingredient = <div className={styleCss.Plum}></div>;
                break;
            case('milk'):
                ingredient = <div className={styleCss.Milk}></div>;
                break;
            case('juice'):
                ingredient = <div className={styleCss.Juice}></div>;
                break;
            default:
                ingredient=null;
        }
        return ingredient;
    }
}
    
SmoothieIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default SmoothieIngredient;