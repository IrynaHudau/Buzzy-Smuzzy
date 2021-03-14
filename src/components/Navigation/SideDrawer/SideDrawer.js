import React from 'react';
import styleCss from './SideDrawer.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigatiomItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxilliry';

const sideDrawer = (props) => {
    let attachedStyleClasses= [styleCss.SideDrawer,styleCss.Close];
    if(props.open){
        attachedStyleClasses = [styleCss.SideDrawer,styleCss.Open];
    }
    return(
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedStyleClasses.join(' ')} onClick={props.closed}>
                <div className={styleCss.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems isAuthenticated={props.isAuth}/>
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;