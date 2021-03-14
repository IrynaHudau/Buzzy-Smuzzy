import React from 'react';
import styleCss from './NavigationItem.module.css';
import {NavLink} from 'react-router-dom';

const navigationItem = (props) => ( 
    <li className={styleCss.NavigationItem}>
        <NavLink
            activeClassName={styleCss.active}
            exact={props.exact}
            to={props.link}>
            {props.children}
        </NavLink>
    </li>
);

export default navigationItem;