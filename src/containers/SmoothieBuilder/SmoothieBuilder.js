import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from '../../axios-orders';
import * as smoothieBuilderActions from '../../store/actions/index';
import Aux from '../../hoc/Auxilliry';
import Smoothie from '../../components/Smoothie/Smoothie';
import BuidControls from '../../components/Smoothie/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummery from '../../components/Smoothie/OrderSummery/OrderSummery';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'; 
import Spinner from '../../components/UI/Spinner/Spinner';

export class SmoothieBuilder extends Component{
    // constructor(props){
    //     super(props);
    //     this.state ={...};
    // }
    state = {
        orderButtonCliked: false,
        // loading: false,
    }

    componentDidMount(){
       this.props.onInitIngredients();
    }

    updatePurchaseState(ingredients){
        const ingredientsN = {
            ...ingredients
        };
        const sum = Object.keys(ingredientsN).map(ingKey =>{
            return ingredientsN[ingKey]
        })
        .reduce((sum, el) => {
            return sum + el;
        }, 0);
       return  sum > 0;
    }

    orderClickedHandler = () =>{
        if(this.props.isAuthenticated){
            this.setState({orderButtonCliked:true});
        }else{
            this.props.onSetAuthRedirectPath('/checkout');
            this.props.history.push('/auth');
        }
    }

    orderCancelHandler = () => {
        this.setState({orderButtonCliked:false});
    }

    orderContinueHandler = () => {
        this.props.onInitPurchase();
        this.props.history.push('/checkout'); 
    }

    render(){
        const disableInfo ={
            ...this.props.ings
        };
        for(let key in disableInfo){
            disableInfo[key] = disableInfo[key] <= 0
        }
        let orderSummery = null;
        let smoothie = this.props.error ? <p>INGREDIENT can't be loaded! </p> : <Spinner/>
        if(this.props.ings){
            smoothie = (
                <Aux>
                    <Smoothie ingredients={this.props.ings}/>
                    <BuidControls
                        ingredientAdded ={this.props.onIngredientAdded}
                        ingredientRemoved ={this.props.onIngredientRemoved}
                        disabled={disableInfo}
                        price={this.props.price}
                        isAuth ={this.props.isAuthenticated}
                        purchasable ={this.updatePurchaseState(this.props.ings)}
                        clickedOrder = {this.orderClickedHandler}
                    />
                </Aux>
            );
            orderSummery= <OrderSummery  
            ingredients={this.props.ings} 
            totalPrice={this.props.price}
            orderCanceled={this.orderCancelHandler} 
            orderContinued={this.orderContinueHandler}/>
        }      
        // if(this.state.loading){
        //     orderSummery = <Spinner/>;
        // }

        return(
           <Aux>
                <Modal show={this.state.orderButtonCliked} modalClosed={this.orderCancelHandler}>
                    {orderSummery}
                </Modal>
               {smoothie}
           </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings:state.smoothieBuilder.ingredients,
        price:state.smoothieBuilder.totalPrice,
        error: state.smoothieBuilder.error,
        isAuthenticated: state.auth.token !== null
    };
}

const mapDispatchToProps = dispatch => {
    return{
        onIngredientAdded: (ingName) => dispatch(smoothieBuilderActions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(smoothieBuilderActions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(smoothieBuilderActions.initIngredients()),
        onInitPurchase : () => dispatch(smoothieBuilderActions.purchaseInit()),
        onSetAuthRedirectPath: (path) => dispatch(smoothieBuilderActions.setAuthRedirectPath(path))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(SmoothieBuilder, axios));