import React from 'react';
import s from './Portfolio.module.css'
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Skills from "./components/skills/Skills";
import Works from "./components/works/Works";
import Text from "./components/text/Text";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";

const Portfolio = () => {
    return <div className={s.portfolio}>
        <Header/>
        <a name="Home" className={s.a}/>
        <Main/>
        <Skills/>
        <Works/>
        <Text/>
        <Contacts/>
        <Footer/>
    </div>
};

export default Portfolio;