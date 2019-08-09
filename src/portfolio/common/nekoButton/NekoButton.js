import React from 'react';
import s from './NekoButton.module.css'

const NekoButton = (props) => {
    return <button className={s.b} onClick={props.onClick}>
        {props.t}
    </button>
};

export default NekoButton;