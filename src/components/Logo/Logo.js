import React from 'react';
//import smoothieLogo from '../../assets/Images/images.png';
// import smoothieLogo from '../../assets/Images/images.png';
import styleCss from './Logo.module.css';

const logo = (props) => (
    <div className={styleCss.Logo} style={{height:props.height}}>
        <img scr={require('../../assets/Images/images.png')} width="70" height="50" alt="MySmoothie"/>
    </div>
);

export default logo;