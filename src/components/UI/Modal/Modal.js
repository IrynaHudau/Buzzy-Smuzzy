import React, {Component} from 'react';
import styleCss from './Modal.module.css';
import Aux from '../../../hoc/Auxilliry';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component{
    shouldComponentUpdate(nextProps,nestState){
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    // componentWillUpdate(){
    //     console.log('[Modal] WillUpdete');
    // }

    render(){
        return(
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div    className={styleCss.Modal} 
                        style={{
                            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                            opacity: this.props.show ? '1' : '0'  
                        }}>
                        {this.props.children}
                </div>
            </Aux>
        )
    }
}

export default Modal;