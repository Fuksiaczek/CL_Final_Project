import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

import PageMain from "./components/page-main/page-main";
import TreeDress from "./components/page-dress-tree/page-dress-tree";

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

    setClearLogin = () =>
    {
        this.setState({
            login: "",
        })
    };


    render() {
        return (
            <HashRouter>
                <>
                    <Route exact path='/'
                           render={() => <PageMain
                               setLogin={this.setLogin}
                               login={this.state.login}
                               setClearLogin={this.setClearLogin}/>} />
                    <Route path='/game1'
                           render={() => <TreeDress
                                login={this.state.login}
                                setClearLogin={this.setClearLogin}/>}/>
                </>
            </HashRouter>
        )
    }


}

ReactDOM.render(
    <App/>,
    document.getElementById("app")
    );

