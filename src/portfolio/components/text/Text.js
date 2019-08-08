import React from 'react';
import s from './Text.module.css'
import Title from "../../common/title/Title";
import NekoButton from "../../common/nekoButton/NekoButton";

const Text = () => {
    return <div className={s.text}>
        <Title t={'I will consider options for remote work'}/>
        <div className={s.line}></div>
        <NekoButton t={'HIRE ME'}/>
    </div>
};

export default Text;