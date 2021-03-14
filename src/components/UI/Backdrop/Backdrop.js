import React from 'react';
import styleCss from './Backdrop.module.css';

const backdrop = (props) => (
    props.show ? <div className={styleCss.Backdrop} onClick={props.clicked}></div> : null
);

export default backdrop;