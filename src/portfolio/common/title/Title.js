import React from 'react';
import s from './Title.module.css'

const Title = (props) => {
    return <span className={s.title}>
        {props.t}
    </span>
};

export default Title;