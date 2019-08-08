import React from 'react';
import s from './Contacts.module.css'
import Title from "../../common/title/Title";
import NekoButton from "../../common/nekoButton/NekoButton";

const Contacts = () => {
    return <div className={s.contacts}>
        <a name="Contact" className={s.a}/>
        <div className={s.contContainer}>
            <Title t={'Contact'}/>
            <div className={s.line}></div>
            <div className={s.inputs}>
                <input placeholder={'Name'} className={s.bc}/>
                <input placeholder={'Email'} className={s.bc}/>
                <textarea rows={7} className={s.bc}/>
            </div>
            <NekoButton t={'SEND MESSAGE'}/>
        </div>
    </div>
};

export default Contacts;