import React from 'react';
import s from './Main.module.css'
import Title from "../../common/title/Title";

const Main = () => {
    return <div className={s.main}>
        <div className={s.mainContainer}>
            <div className={s.spans}>
                <span>Hi There</span>
                <span>I am
                    <span className={s.lineContainer}>
                        <Title t={'Ignat Zakalinsky'}/>
                        <div className={s.line}/>
                    </span>
                </span>
                <span>A <Title t={'Front-End'}/> Developer</span>
            </div>
            <div className={s.photoContainer}>
                <img src={'https://sun9-51.userapi.com/c850136/v850136493/1c9104/4Kjcx40ZOcM.jpg'} alt={'photo'}/>
                {/*<div className={s.photo}>
                    <div>здесь могла</div>
                    <div>бы быть</div>
                    <div>ваша реклама</div>
                    <div>:)</div>
                </div>*/}
                <div className={s.border}/>
            </div>
        </div>
    </div>
};

export default Main;