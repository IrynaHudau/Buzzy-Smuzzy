import React from 'react';
import styleCss from './DraweToggle.module.css';

const drawerToggle = (props) => (
    <div className={styleCss.DrawerToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToggle;