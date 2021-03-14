import React from 'react';
import styleCss from './Input.module.css'

const input = (props) => {
    let inputElem = null;
    const inputStyless = [styleCss.InputElement];
    let validationError = null;
    
    if(props.invalid && props.shouldValidate && props.touched){
        validationError = <p className={styleCss.ValidationError}>Please enter a valid value!</p>
        inputStyless.push(styleCss.Invalid);
    }

    switch(props.elementType){
        case('input'):
            inputElem =<input 
                className={inputStyless.join(' ')}  
                {...props.elementConfig} 
                onChange={props.changed}
                value={props.value}/>;
            break;
        case('textarea'):
            inputElem= <textarea 
                className={inputStyless.join(' ')}  
                {...props.elementConfig} 
                onChange={props.changed}
                value={props.value}/>;
            break;
        case('select'):
            inputElem = (
                <select 
                    className={inputStyless.join(' ')}  
                    onChange={props.changed}
                    value={props.value}>
                    {props.elementConfig.options.map(option =>(
                        <option  key ={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElem =<input 
                className={inputStyless.join(' ')}  
                onChange={props.changed}
                {...props.elementConfig} 
                value={props.value}/>;

    }
    return(
        <div className={styleCss.Input}>
            <label className={styleCss.Label} >{props.label}</label>
            {inputElem}
            {validationError}
        </div>
    );
};

export default input;