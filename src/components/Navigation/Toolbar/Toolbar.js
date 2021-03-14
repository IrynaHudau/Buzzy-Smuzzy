import React from 'react';
import styleCss from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigatiomItems/NavigationItems';
import DrawerTogge from '../SideDrawer/DrawerToggle/DrawerToggle';


const toolbar = (props) => (
    <header className={styleCss.Toolbar}>
        <DrawerTogge clicked={props.drawerToggleClicked}/>
        <div className={styleCss.Logo}>
            <Logo/>
        </div>
        <nav  className={styleCss.DesktopOnly}>
            <NavigationItems isAuthenticated={props.isAuth}/>
        </nav>
    </header>
);

export default toolbar;