import React from 'react';
import s from './Works.module.css'
import Title from "../../common/title/Title";

const Work = (props) => {
    return <div className={s.work}>
        <div className={s.img}>
            <a href={props.src}>
            <img src={props.src} alt={'work'}/>
            </a>
        </div>
        <a href={props.href}>
            <Title t={props.name}/>
        </a>
        <div className={s.about}>
            {props.about}
        </div>
    </div>

};

export default Work;