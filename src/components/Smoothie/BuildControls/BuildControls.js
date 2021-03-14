import React, {Component} from 'react';
import styleCss from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';


class BuildControls extends Component{

    state = {
        ingredient: "",
        type: "",
        isClickedMore:false,
    }

    componentDidMount() {
       document.addEventListener("click", this.handleClick.bind(this));
      }

      componentWillUnmount() {
        document.removeEventListener('click', this.handleClick.bind(this));
      }

      handleClick(e){
        // if (this.node.contains(e.target)) {
            if(e.target.id === 'buttonMore'){
                this.setState({isClickedMore:true});
            }
            //console.log('You clicked INSIDE the component.') 
        //   } else {
        //     //console.log('You clicked OUTSIDE the component.')
        //   }
    }

    handleSelectChanged(event) {
        const newIngredient= event.target.value;
        const typeIngredient = event.target.id; 
        this.setState({ingredient: newIngredient, type: typeIngredient});
    }

    render(){ 
        const liquid = [
            {label: 'Milk',type: 'milk',},
            {label: 'Juise',type: 'juise',}
        ];

        const greens = [
            {label :'Salad',type: 'salad'},
            {label :'Celery',type: 'celery'},
            {label :'Kale',type: 'kale'}
        ];

        const vege = [
            {label :'Cucumber',type: 'cucumber'},
            {label :'Carrot',type: 'carrot'},
            {label :'Beats',type: 'beats'}
        ];

        const fruit = [
            {label :'Banana',type: 'banana'},
            {label :'Stawberry',type: 'stawberry'},
            {label :'Orange',type: 'orange'},
            {label :'Apple',type: 'apple'},
            {label :'Plum',type: 'plum'}
        ];

        const controls = [
            {value : liquid, name:'liquid'},
            {value : greens, name:'greens'},
            {value : vege, name:'vege'},
            {value : fruit, name:'fruit'}
         ];

        return(
            <div className={styleCss.BuildControls}>
                <p>Current Price : <strong>{this.props.price.toFixed(2)}</strong></p>
                <div  ref={node => this.node = node}>
                {controls.map(cnt => {
                    return <BuildControl    
                                key={cnt.name} 
                                name={cnt.name} 
                                value={cnt.value}
                                picking = {this.handleSelectChanged.bind(this)}
                                added={() => this.props.ingredientAdded(this.state.ingredient)}
                                removed={() => this.props.ingredientRemoved(this.state.ingredient)}
                                disabledLess={this.state.ingredient === "" || cnt.name !== this.state.type || this.state.isClickedMore === false ? true : this.props.disabled[this.state.ingredient]}  
                                disabledMore={this.state.ingredient === "" || cnt.name !== this.state.type ? true : false}
                                />
                })}
                </div>
                <button 
                    className={styleCss.OrderButton}
                    disabled={!this.props.purchasable}
                    onClick={this.props.clickedOrder}>{this.props.isAuth ? 'ORDER NOW' : 'SIGN IN TO ORDER'}</button>
            </div>
        );
    }
}


export default BuildControls;