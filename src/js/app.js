import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Main from "./main/main";

import './../sass/style.scss';

function App()
{
    return (
        <Main/>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById("app")
    );

