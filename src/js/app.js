import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

import Main from "./main/main";
import Game1 from "./game1/game1";

import './../sass/style.scss';

function App()
{
    return (
        <HashRouter>
            <>
                <Route exact path='/' component={Main} />
                <Route path='/game1' component={Game1} />
            </>
        </HashRouter>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById("app")
    );

