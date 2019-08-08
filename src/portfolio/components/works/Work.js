import React from 'react';
import s from './Works.module.css'
import Title from "../../common/title/Title";

const Work = (props) => {
    return <div className={s.work}>
        <div className={s.img}>
            work
        </div>
        <Title t={props.name}/>
        <div className={s.about}>
            {props.about}
        </div>
    </div>

};

export default Work;