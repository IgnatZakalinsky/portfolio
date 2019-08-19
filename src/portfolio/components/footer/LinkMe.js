import React from 'react';
import s from './Footer.module.css';

const LinkMe = (props) => {
    return <div className={s.sn}>
        <a href={props.href} target="_blank">
            <img src={props.src} alt={'logo'}/>
        </a>
    </div>
};

export default LinkMe;