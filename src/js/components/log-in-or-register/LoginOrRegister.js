import React, {Component} from 'react';
import LogIn from "./LogIn";
import Register from "./Register";
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
      });
      this.props.checkoutRegister();
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
        });
        this.props.checkoutRegister();
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
                                     isGoBackLog={this.isGoBackLog}
                                     data={this.props.data}/>}
                    {toRegister && <Register usersLogIn={usersLogIn}
                                             isGoBackRegister={this.isGoBackRegister}
                                             data={this.props.data}/>}
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