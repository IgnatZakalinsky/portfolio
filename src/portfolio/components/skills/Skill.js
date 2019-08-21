import React from 'react';
import s from './Skills.module.css'
import Title from "../../common/title/Title";

const Skill = (props) => {
    return <div className={s.skillsBlock}>
        <div className={s.img}>
            <img src={props.src}
                 alt={'logo'}/>
        </div>
        <a href={props.study} target="_blank">
            <Title t={props.name}/>
        </a>

        <div className={s.about}>
            {props.about}
        </div>
    </div>

};

export default Skill;