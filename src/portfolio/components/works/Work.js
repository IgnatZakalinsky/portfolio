import React from 'react';
import s from './Works.module.css'
import Title from "../../common/title/Title";

const Work = (props) => {
    return <div className={s.work}>
        <div className={s.img}>
            <a href={props.src} target="_blank">
            <img src={props.src} alt={'work'}/>
            </a>
        </div>
        <a href={props.href} target="_blank">
            <Title t={props.name}/>
        </a>
        <div className={s.about}>
            {props.about}
        </div>
    </div>

};

export default Work;