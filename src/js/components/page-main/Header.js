import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../../sass/style.scss';

class Header extends Component {

    state =
        {
            styleLinkHover: {},
            styleUserHover: {},
            menuEnter: false,
            userEnter: false,
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

    EnterUser = () => {
        this.setState({
            styleUserHover:
                {
                    color: "#B81719",
                    textShadow: "0 0 10px #D4AF37",
                    cursor: "pointer"
                }
        });
    };

    LeaveUser  = () => {
        this.setState({
            styleUserHover: {}
        });
    };


    HandleUser  = () => {

        if (this.state.userEnter)
        {
            this.setState({
                userEnter: false
            })
        }
        else
        {
            this.setState({
                userEnter: true
            })
        }

    };

    HandleLogOut = () =>
    {
        this.props.setLogOut();
        this.props.setClearLogin();

        this.setState({
            userEnter: false
        })
    };


    render() {
        const {isLogIn, login} = this.props;
        const {styleLinkHover, menuEnter, userEnter, styleUserHover} = this.state;
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
                                    <Link to="/dress-your-tree">DRESS YOUR TREE</Link>
                                </li>
                            </ul>
                        </nav>}
                        <div className="log-in-data">
                            <h2>{login}</h2>
                            <i className="fas fa-2x fa-user"
                               onMouseEnter={this.EnterUser}
                               onMouseLeave={this.LeaveUser}
                               onClick={this.HandleUser}
                               style={styleUserHover}
                            />
                            {userEnter &&
                                <ul>
                                    <li>
                                        <a onClick={this.HandleLogOut}>LOG OUT</a>
                                    </li>
                                </ul>}
                        </div>
                    </section>
                </header>}
            </>
        )
    }
}

export default Header;


