import React from 'react';
import s from './NekoButton.module.css'

const NekoButton = (props) => {
    return <button className={s.b}>
        {props.t}
    </button>
};

export default NekoButton;