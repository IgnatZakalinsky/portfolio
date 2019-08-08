import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return <div className={s.preheader}>
        <div className={s.header}>
            <div className={s.navContainer}>
                <div className={s.navbar}>
                    <a href={'#Home'} className={s.link}>Home</a>
                    <a href={'#MySkills'} className={s.link}>My Skills</a>
                    <a href={'#MyWorks'} className={s.link}>My Works</a>
                    <a href={'#Contact'} className={s.link}>Contact</a>
                </div>
            </div>
        </div>
        <div className={s.line}></div>
    </div>
};

export default Header;