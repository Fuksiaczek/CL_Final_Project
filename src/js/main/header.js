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
            styleLinkHover: {},
            menuEnter: false
        };
    EnterMenuLink = () => {
        this.setState({
            styleLinkHover:
                {
                    color: "#B81719",
                    textShadow: "0 0 10px #D4AF37",
                    cursor: "pointer"
                }
        });
    };

    LeaveMenuLink  = () => {
        this.setState({
            styleLinkHover: {}
        });
    };

    HandleMenuLink  = () => {

        if (this.state.menuEnter)
        {
            this.setState({
                menuEnter: false
            })
        }
        else
        {
            this.setState({
                menuEnter: true
            })
        }
    };

    render() {
        const {isLogIn, login} = this.props;
        const {styleLinkHover, menuEnter} = this.state;
        return (
            <>
                {(isLogIn || login) &&
                <header className="container">
                    <section className="header">

                        <div>
                            <i
                                onMouseEnter={this.EnterMenuLink}
                                onMouseLeave={this.LeaveMenuLink}
                                onClick={this.HandleMenuLink}
                                style={styleLinkHover}
                                className="fas fa-2x fa-bars"/>
                        </div>
                        {menuEnter &&
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">HOME</Link>
                                </li>
                                <li>
                                    <Link to="/game1">DRESS YOUR TREE</Link>
                                </li>
                            </ul>
                        </nav>}
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


