import React from 'react';
import s from './Skills.module.css'
import Title from "../../common/title/Title";
import Skill from "./Skill";

const Skills = () => {
    let MySkills = [
        {
            src: 'https://sparklingstop.com/wp-content/uploads/2019/03/react_1353128-100x100.png',
            name: 'React', about: 'Easy Peasy', study: "https://www.youtube.com/watch?v=Zgd9IlbhDcU"
            //IT-KAMASUTRA React JS - путь самурая
        },
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/80px-Unofficial_JavaScript_logo_2.svg.png',
            name: 'JavaScript', about: 'in the process of improvement', study: "https://developer.mozilla.org/ru/docs/Web/JavaScript"
        },
        {
            src: 'http://www.filecoffee.com/images/pc/100/Java_Development_Kit_for_Mac1.png',
            name: 'Java 8 core', about: 'just for fun', study: "https://my-files.ru/ifeqvg"
            //Шилдт Г. - Java 8. Полное руководство. 9-е издание (2015)
        }
    ];
    MySkills = MySkills.map(s => <Skill src={s.src} name={s.name} about={s.about} study={s.study}/>);

    return <div className={s.skills}>
        <a name="MySkills" className={s.a}/>
        <div className={s.skillsContainer}>
            <Title t={'My Skills'}/>
            <div className={s.line}/>
            <div className={s.skillsBlocks}>
                {MySkills}
            </div>
        </div>
    </div>
};

export default Skills;