import React, {lazy, Suspense} from 'react';
import './App.css';
import {NavLink, Route} from "react-router-dom";
import Portfolio from "./portfolio/Portfolio";

const Clock = lazy(() => import("./clock"));
const Home = lazy(() => import("./home"));

function App(props) {
    return <Portfolio/>
    /*return (
        <div className="App">
            {props.counter}
            <div>
                <NavLink to={'/clock'}>Clock</NavLink>
            </div>
            <div>
                <NavLink to={'/home'}>Home</NavLink>
            </div>
            <hr/>

            <Route path={'/clock'} render={() =>
                <Suspense fallback={<Loading/>}>
                    <Clock counter={props.counter}/>
                </Suspense>}/>
            <Route path={'/home'} render={() =>
                <Suspense fallback={<Loading/>}>
                    <Home/>
                </Suspense>}/>
        </div>
    );*/
}

function Loading(props) {
    return <div>Loading...</div>
}

export default App;
