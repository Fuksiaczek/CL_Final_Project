import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import BackgroundImage from"./background-image";
import MainText from"./main-text";
import LoginOrRegister from "./login-or-register";

import Snowf from 'react-snowf';

import Snow from "./snow";

import './../../sass/style.scss';

import users from "./../data/users";

class Main extends Component{

    state =
        {
            isLogIn: false
        }

    render() {
        return(
            <>
                <section className="background-image ">
                    <div className="container">
                        <div className="sky">
                            {this.state.isLogIn ? <MainText/> : <LoginOrRegister usersLogIn={users}/>}

                            <BackgroundImage/>

                        </div>
                    </div>
                </section>
            </>
        )
    }



}


export default Main;