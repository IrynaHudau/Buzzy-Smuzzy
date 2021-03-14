import React,{Component} from 'react';
import Aux from '../../../hoc/Auxilliry';
import Button from '../../UI/Button/Button';

class OrderSummery extends Component{
    // componentWillUpdate(){
    //     console.log('[OrderSummary] WillUpdeta');
    // }

    render(){
        const ingredientSummery = Object.keys(this.props.ingredients).map(ingKey => {
            return (
                    <li key={ingKey}>
                        <span style={{textTransform:'capitalize'}}>{ingKey}</span>: {this.props.ingredients[ingKey]}
                    </li>
                );
        });

        return(
            <Aux>
                <h3>Your Order</h3>
                <p>A delicios smoothie with the following ingredients</p>
                <ul>
                    {ingredientSummery}
                </ul>
                <p><strong>Total price: {this.props.totalPrice.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.orderCanceled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.orderContinued}>CONTINUE</Button>
            </Aux>
        )
    }
} 
export default OrderSummery;