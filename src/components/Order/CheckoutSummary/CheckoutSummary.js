import React from 'react';
import Smoothie from '../../Smoothie/Smoothie';
import Button from '../../UI/Button/Button';
import styleCss from './CheckoutSummary.module.css';


const checkoutSummary = (props) => {
    return (
        <div className={styleCss.CheckouSummary}>
            <h1>WE hope tast is good!!</h1>
            <div style={{width:'100%', margin:'auto'}}>
                <Smoothie ingredients={props.ingredients}/>
            </div>
            <Button btnType="Danger" clicked={props.checkoutCancelled} >CANCEL</Button>
            <Button btnType="Success" clicked={props.checkoutContinued}>CONTINUE</Button>
        </div>
    );
}

export default checkoutSummary;