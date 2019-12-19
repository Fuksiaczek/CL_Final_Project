import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import BackgroundImage from"./background-image";
import MainText from"./main-text";
import LoginOrRegister from "./login-or-register";

import Snow from "./snow";

import Header from "./header";

import './../../sass/style.scss';

import users from "./../data/users";

class Main extends Component{

    state =
        {
            isLogIn: false,
            //login: ""
        }

        setLogStatus = () =>
        {
            this.setState({
                isLogIn: true,
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
                <Header isLogIn={isLogIn} login={login}/>

                <section className="background-image ">
                    <div className="container">
                        <div className="sky">

                            {this.state.isLogIn ? <MainText/> :
                            <LoginOrRegister usersLogIn={users}
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


export default Main;