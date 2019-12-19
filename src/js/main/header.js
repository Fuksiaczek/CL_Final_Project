import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

import './../../sass/style.scss';

import users from "./../data/users";

class Header extends Component {

    state =
        {
            styleLinkHover: {}
        }
    EnterMenuLink = () => {
        this.setState({
            styleLinkHover:
                {
                    textShadow: "0px 0px 20px 4px #b81719"
                }
        });
    };

    LeaveMenuLink  = () => {
        this.setState({
            styleLinkHover: {}
        });
    };

    render() {
        const {isLogIn, login} = this.props;
        const {styleLinkHover} = this.state
        return (
            <>
                {isLogIn &&
                <header className="container">
                    <section className="header">
                        <nav>
                            <ul>
                                <li>
                                    <Link style={styleLinkHover}
                                          to="/">HOME</Link>
                                </li>
                                <li>
                                    <Link style={styleLinkHover}
                                          to="/game1">DRESS YOUR TREE</Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="log-in-data">
                            <h2>{login}</h2>
                            <i className="fas fa-2x fa-user"></i>
                        </div>
                    </section>
                </header>}
            </>
        )
    }
}

export default Header;


