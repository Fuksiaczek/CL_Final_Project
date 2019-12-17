import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import BackgroundImage from"./background-image";
import MainText from"./main-text";
import LoginOrRegister from "./login-or-register";

import './../../sass/style.scss';



class Main extends Component{

    state =
        {
            loggin: "false"
        }

    render() {
        return(
            <>
                <section className="background-image ">
                    <div className="container">
                        <div className="sky">
                            {!this.state.loggin ? <MainText/> : <LoginOrRegister/>}
                            <BackgroundImage/>
                        </div>
                    </div>
                </section>
            </>
        )
    }



}


export default Main;