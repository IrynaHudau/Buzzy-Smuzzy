import React,{Component} from 'react';
import {connect} from 'react-redux';

import Button from '../../../components/UI/Button/Button';
import styleCss from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../../store/actions/index';
import {checkValidity} from '../../../shared/utility';

class ContactData extends Component{
    state = {
        orderForm:{
            name: {
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Your Name'
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            street: {
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Your Street'
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            zip: {
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Zip Code'
                },
                value:'',
                validation:{
                    required:true,
                    minLenght: 5,
                    maxLenght:5
                },
                valid:false,
                touched:false
            },
            phone: {
                elementType:'input',
                elementConfig:{
                    type:'number',
                    placeholder:'Your Phone number '
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            email: {
                elementType:'input',
                elementConfig:{
                    type:'email',
                    placeholder:'Your E-mail'
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            deliveryMethod: {
                elementType:'select',
                elementConfig:{
                    options:[
                        {value:'fastest',displayValue:'Fastest'},
                        {value:'cheapes',displayValue:'Cheapest'}
                    ]
                },
                value:'fastest',
                validation:{},
                valid:true,
            }
        },
        formIsValid:false
    }

    orderHandler = (event) => {
        event.preventDefault();
        // this.setState( { loading: true } );
        const formData = {};
        for(let formElemIdetifier in this.state.orderForm){
            formData[formElemIdetifier] = this.state.orderForm[formElemIdetifier].value;
        }
        const order = {
            ingredients: this.props.ings,
            price: this.props.price,
            orderData:formData,
            userId: this.props.userId

        }

        this.props.onOrderSmoothie(order, this.props.token);

    }

    inputChangedHandler = (event, inputIdentifier) => {
        //console.log(event.target.value);
        const updatedOrderForm ={
            ...this.state.orderForm
        };
        const newFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };
        newFormElement.value = event.target.value;
        newFormElement.valid = checkValidity(newFormElement.value, newFormElement.validation);
        newFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = newFormElement;
        //console.log(newFormElement);

        let formIsValid = true;
        for(let inputIdentifier in updatedOrderForm){
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }

        this.setState({orderForm: updatedOrderForm, formIsValid:formIsValid});
    }

    render(){
        const formElementArray = [];
        for(let key in this.state.orderForm){
            formElementArray.push({
                id:key,
                config:this.state.orderForm[key]
            });
        }

        let form = (
            <form onSubmit={this.orderHandler}>
                {formElementArray.map(formElement => (
                    <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType} 
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid = {!formElement.config.valid}
                        shouldValidate = {formElement.config.validation}
                        touched = {formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}
                    />
                ))}
                <Button btnType="Success" disabled={!this.state.formIsValid}>ORDER</Button>
            </form>
        );
        if ( this.props.loading ) {
            form = <Spinner />;
        }
        return(
            <div className={styleCss.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        ings: state.smoothieBuilder.ingredients,
        price:state.smoothieBuilder.totalPrice,
        loading:state.order.loading,
        token:state.auth.token,
        userId:state.auth.userId
    };
}

const mapDispatchToProps = dispatch => {
    return{
        onOrderSmoothie : (orderData,token) => dispatch(actions.purchaseSmoothie(orderData,token))
    };
    
};

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(ContactData,axios));