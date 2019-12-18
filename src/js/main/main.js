import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import BackgroundImage from"./background-image";
import MainText from"./main-text";
import LoginOrRegister from "./login-or-register";

import Snow from "./snow";

import './../../sass/style.scss';

import users from "./../data/users";

class Main extends Component{

    state =
        {
            isLogIn: false,
            login: ""
        }

        setLogStatus = () =>
        {
            this.setState({
                isLogIn: true,
                })
        };



    setLogin = (user) =>
    {
        this.setState({
            login: user
        })
    }

    render() {
        const {isLogIn, login} = this.state;
        return(
            <>
                {isLogIn &&
                <header className="container">
                    <section className="header">
                        <div></div>
                        <div className="log-in-data">
                            <h2>{login}</h2>
                            <i className="fas fa-2x fa-user"></i>
                        </div>
                    </section>
                </header>}

                <section className="background-image ">
                    <div className="container">
                        <div className="sky">

                            {this.state.isLogIn ? <MainText/> :
                            <LoginOrRegister usersLogIn={users}
                            setLogStatus={this.setLogStatus}
                            setLogin={this.setLogin}/>}

                            <BackgroundImage/>

                        </div>
                    </div>
                </section>
            </>
        )
    }



}


export default Main;