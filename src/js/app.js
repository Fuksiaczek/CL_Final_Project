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

class App extends Component
{
    state =
        {
            login: ""
        }

    setLogin = (user) =>
    {
        this.setState({
            login: user
        })
    }

    render() {
        return (
            <HashRouter>
                <>
                    <Route exact path='/' render={() => <Main setLogin={this.setLogin} login={this.state.login}/>} />
                    <Route path='/game1' render={() => <Game1 login={this.state.login}/>}/>
                </>
            </HashRouter>
        )
    }


}

ReactDOM.render(
    <App/>,
    document.getElementById("app")
    );

