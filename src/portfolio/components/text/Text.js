import React from 'react';
import s from './Text.module.css'
import Title from "../../common/title/Title";
import NekoButton from "../../common/nekoButton/NekoButton";

const Text = () => {
    const phone = () => alert('Life :) +375 25 633 21 46');

    return <div className={s.text}>
        <Title t={'I will consider options for remote work'}/>
        <div className={s.line}></div>
        <div onClick={phone}>
            <NekoButton t={'HIRE ME'}/>
        </div>
    </div>
};

export default Text;