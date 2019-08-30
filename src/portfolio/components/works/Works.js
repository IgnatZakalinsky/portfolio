import React from 'react';
import s from './Works.module.css'
import Title from "../../common/title/Title";
import Work from "./Work";

const Works = () => {
    return <div className={s.works}>
        <a name="MyWorks" className={s.a}/>
        <div className={s.worksContainer}>
            <Title t={'My Works'}/>
            <div className={s.line}></div>
            <div className={s.myWorks}>
                <Work name={'NekoCafes'} about={'social network with cafes'}
                      src={'https://sun9-55.userapi.com/c851032/v851032963/18b67e/jxW663ZJMHw.jpg'}
                      href={'https://github.com/IgnatZakalinsky/nc'}/>
                <Work name={'TodoLists'} about={'todoLists with save on server'}
                      src={'https://sun9-20.userapi.com/c851132/v851132493/1a39ec/zB2YqLG6uVY.jpg'}
                      href={'https://github.com/IgnatZakalinsky/todoList'}/>
            </div>
        </div>
    </div>
};

export default Works;