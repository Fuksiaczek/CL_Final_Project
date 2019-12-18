import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import LoadingData from "./loading-data";

import './../../sass/style.scss';
import users from "../data/users";


class LogIn extends Component
{
    state =
        {
            uLogin: "",
            log: "",
            uPassword: "",
            pass: "",
            submit: "",
            styleLogInBtn: {}
        };

    HandleChangeLogin = (e) =>
    {
        const {usersLogIn} = this.props;
        this.setState({
            uLogin: e.target.value,
        });

    };

    HandleChangePassword = (e) =>
    {
        const {usersLogIn} = this.props;
        this.setState({
            uPassword: e.target.value,
        });

    };

    SubmitLogIn = (e) =>
    {
        const {pass, log, submit, uPassword, uLogin} = this.state;
        const {usersLogIn} = this.props;
        e.preventDefault();

        this.setState({
            pass: false,
            log: false
        });

        for (let i = 0; i < usersLogIn.length; i++)
        {
            if((usersLogIn[i].password === uPassword) && (usersLogIn[i].login === uLogin))
            {
                this.setState({
                    pass: true,
                    log: true,
                    submit: true
                });
                this.props.setLogin(this.state.uLogin);
                break;
            }
            else if(submit === "")
            {
                this.setState({
                    submit: false
                })
            }
        }



    };

    EnterLogInBtn = () => {
        this.setState({
            styleLogInBtn: {background: "#911719"}
        });
    };

    LeaveLogInBtn = () => {
        this.setState({
            styleLogInBtn: {}
        });
    };




    render() {
        const {usersLogIn} = this.props;
        const {submit} = this.state;
        return(
            <>
                <div className="lor-background">
                    {submit !== true ?
                        <>
                            <form onSubmit={this.SubmitLogIn}>
                                <label>LOGIN</label>
                                <input type="text"
                                       name="login"
                                       value={usersLogIn.login}
                                       placeholder="your login"
                                       onChange={this.HandleChangeLogin}/>
                                <label>PASSWORD</label>
                                <input type="password"
                                       name="password"
                                       value={usersLogIn.password}
                                       placeholder="your password"
                                       onChange={this.HandleChangePassword}/>
                                <input type="submit" className="submit" value="LOG IN"
                                       style={this.state.styleLogInBtn}
                                       onMouseEnter={this.EnterLogInBtn}
                                       onMouseLeave={this.LeaveLogInBtn}/>
                            </form>
                    </> :
                    <>
                        <LoadingData setLogStatus={this.props.setLogStatus}/>
                    </>}
                </div>
                <div>
                    {submit === false && <h3>Niepoprawny login lub hasło</h3> }
                </div>
            </>
         )
    }
}

export default LogIn;