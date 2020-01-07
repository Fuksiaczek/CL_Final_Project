import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import LogIn from "./log-in";
import Register from "./register";

import '../../../sass/style.scss';

class LoginOrRegister extends Component
{
    state =
        {
            toLog: false,
            toRegister: false,
            styleLogIn: {},
            styleRegister: {}
        };

    HandleLogInBtn = () =>
    {
      this.setState({
              toLog: true
      })
    };

    EnterLogInBtn = () => {
        this.setState({
            styleLogIn: {
                background: "#911719",
                cursor: "pointer"}
        });
    };

    LeaveLogInBtn = () => {
        this.setState({
            styleLogIn: {}
        });
    };

    EnterRegisterBtn = () => {
        this.setState({
            styleRegister: {
                background: "#911719",
                cursor: "pointer"}
        });
    };

    LeaveRegisterBtn = () => {
        this.setState({
            styleRegister: {}
        });
    };

    HandleRegisterBtn = () =>
    {
        this.setState({
            toRegister: true
        })
    };

    isGoBackLog = () =>
    {
        this.setState({
            toLog: false
        })
    };

    isGoBackRegister = () =>
    {
        this.setState({
            toRegister: false
        })
    };


    render() {
        const {toLog, toRegister, styleRegister, styleLogIn} = this.state;
        const {usersLogIn} = this.props;
        return(
            <>
                <div className="login-or-register">
                    {toLog && <LogIn usersLogIn={usersLogIn}
                                     setLogStatus={this.props.setLogStatus}
                                     setLogin={this.props.setLogin}
                                     isGoBackLog={this.isGoBackLog}/>}
                    {toRegister && <Register usersLogIn={usersLogIn}
                                             isGoBackRegister={this.isGoBackRegister}/>}
                    {!(toLog || toRegister) &&
                    <>
                        <button className="log-in-btn lor-btn"
                                onClick={this.HandleLogInBtn}
                                onMouseLeave={this.LeaveLogInBtn}
                                style={styleLogIn}
                                onMouseEnter={this.EnterLogInBtn}>LOG IN</button>
                        <button className="register-btn lor-btn"
                                onClick={this.HandleRegisterBtn}
                                onMouseLeave={this.LeaveRegisterBtn}
                                style={styleRegister}
                                onMouseEnter={this.EnterRegisterBtn}>REGISTER</button>
                    </>}
                </div>
            </>
        )
    }
}

export default LoginOrRegister;