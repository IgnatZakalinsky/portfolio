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
                <Work name={'nextWork'} about={'in progress...'}/>
            </div>
        </div>
    </div>
};

export default Works;