import React from 'react';
import s from './Footer.module.css'
import Title from "../../common/title/Title";
import LinkMe from "./LinkMe";

const Footer = () => {
    return <div className={s.footer}>
        <div className={s.footerContainer}>
            <Title t={'Ignat Zakalinsky'}/>
            <div className={s.sns}>
                <LinkMe href={'https://github.com/IgnatZakalinsky'}
                        src={'https://repository-images.githubusercontent.com/147589929/30740300-7a5c-11e9-81b2-cbc60f90f6b0'}/>
                <LinkMe href={'https://www.linkedin.com/in/ignat-zakalinsky-34b769190/'}
                        src={'https://android-android.ru/upload/iblock/0d3/16.jpg'}/>
                <LinkMe href={'https://t.me/ai73a'} src={'https://telegram.org/img/t_logo.png'}/>
                <LinkMe href={'https://vk.com/ai73aaa'}
                        src={'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/VK.com-logo.svg/80px-VK.com-logo.svg.png'}/>
            </div>
            <div>
                <Title t={'©'}/> 2019 All rights reserved
            </div>

        </div>
    </div>
};

export default Footer;