import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import BackgroundImage from "./background-image";
import MainText from "./main-text";
import LoginOrRegister from "../log-in-or-register/login-or-register";

import Snow from "../snow/snow";

import Header from "./header";

import "../../../sass/style.scss";

import users from "../../../data/users";



class PageMain extends Component{

    state =
        {
            isLogIn: false,
            //login: ""
        };

    setLogStatus = () =>
    {
        this.setState({
            isLogIn: true,
        })
    };

    setLogOut = () =>
    {
        this.setState({
            isLogIn: false,
        })
    };

    // setLogin = (user) =>
    // {
    //     this.setState({
    //         login: user
    //     })
    // }

    render() {
        const {isLogIn} = this.state;
        const {login} = this.props;
        return(
            <>
                <Header isLogIn={isLogIn}
                        login={login}
                        setLogOut={this.setLogOut}
                        setClearLogin={this.props.setClearLogin}/>

                <section className="background-image ">
                    <div className="container">
                        <div className="sky">

                            {isLogIn ? <MainText/> :
                            <LoginOrRegister
                                usersLogIn={users}
                                setLogStatus={this.setLogStatus}
                                setLogin={this.props.setLogin}/>}

                            <BackgroundImage/>

                        </div>
                    </div>
                </section>
            </>
        )
    }



}


export default PageMain;