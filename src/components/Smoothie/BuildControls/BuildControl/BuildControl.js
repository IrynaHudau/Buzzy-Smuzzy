import React from 'react';
import styleCss from './BuildControl.module.css';

const defaultVal = 'Select ingredient';

const buildControl = (props) => (
    
    <div className={styleCss.BuildControl}>
        <label className={styleCss.Label}>{props.name}
             <select className={styleCss.Select} id={props.name} onChange={props.picking} defaultValue={defaultVal}>
                <option value="">{defaultVal}</option>
                {props.value.map(v => {
                    return <option key={v.label} value={v.type} type={v}>{v.label}</option>
                })
                }
             </select>
        </label>
        
        <button className={styleCss.Less} id='buttonLess' onClick={props.removed} disabled={props.disabledLess}>Less</button>
        <button className={styleCss.More} id='buttonMore' onClick={props.added} disabled={props.disabledMore}>More</button>
    </div>
);


export default buildControl;