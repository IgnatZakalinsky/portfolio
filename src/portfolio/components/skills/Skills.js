import React from 'react';
import s from './Skills.module.css'
import Title from "../../common/title/Title";
import Skill from "./Skill";

const Skills = () => {
    return <div className={s.skills}>
        <a name="MySkills" className={s.a}/>
        <div className={s.skillsContainer}>
            <Title t={'My Skills'}/>
            <div className={s.line}/>
            <div className={s.skillsBlocks}>
                <Skill src={'https://sparklingstop.com/wp-content/uploads/2019/03/react_1353128-100x100.png'}
                       name={'React'} about={'Easy Peasy'}/>
                <Skill
                    src={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/80px-Unofficial_JavaScript_logo_2.svg.png'}
                    name={'JavaScript'} about={'in the process of improvement'}/>
                <Skill src={'http://www.filecoffee.com/images/pc/100/Java_Development_Kit_for_Mac1.png'}
                       name={'Java 8 core'} about={'just for fun'}/>
            </div>
        </div>
    </div>
};

export default Skills;