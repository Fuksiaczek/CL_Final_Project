import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

import '../../../sass/style.scss';

import BackgroundImage from "../page-main/background-image";
import Tree from "./tree";

import Header from "../page-main/header";
import Lights from "./lights";
import Star from "./star";


class TreeDress extends Component
{
    state =
        {
            styleGrowBtn: {},
            treeGrow: 1,
            lightsOn: false,
            isStar: false
        };

    EnterGrowBtn = () => {
        this.setState({
            styleGrowBtn: {
                background: "#911719",
                cursor: "pointer"},
        });
    };

    LeaveGrowBtn = () => {
        this.setState({
            styleGrowBtn: {}
        });
    };

    HandleGrowBtn = () =>
    {
        this.setState({
            treeGrow: this.state.treeGrow + 1
        });

        if(this.state.treeGrow === 4)
        {
            this.setState({
                treeGrow: 4
            });
        }

        console.log(this.state.treeGrow);
    };


    HandleLightsBtn = () =>
    {
            this.setState({
                lightsOn: true
            });
    };

    HandleStarBtn = () =>
    {
        this.setState({
            isStar: true
        });
    };


    render() {
        const {styleGrowBtn, lightsOn, treeGrow, isStar} = this.state;
        const {login, isLogIn} = this.props;
        return(
            <>
                <Header isLogIn={isLogIn}
                        login={login}
                        setLogOut={this.props.setLogOut}
                        setClearLogin={this.props.setClearLogin}/>
                <section className="background-image ">
                    <div className="container">
                        <div className="sky">

                            {isStar &&
                            <div className="holiday-box">
                                <h1 className="holiday">
                                <p>{login.toUpperCase()}</p>
                                WE WISH YOU <br/> A HAPPY HOLIDAYS!</h1>
                            </div>}
                            {treeGrow === 4 ?
                                (!lightsOn && <button className="lor-btn grow-btn"
                                    onClick={this.HandleLightsBtn}
                                    onMouseLeave={this.LeaveGrowBtn}
                                    style={styleGrowBtn}
                                    onMouseEnter={this.EnterGrowBtn}>TURN ON THE LIGHTS
                            </button>):
                                <button className="lor-btn grow-btn"
                                    onClick={this.HandleGrowBtn}
                                    onMouseLeave={this.LeaveGrowBtn}
                                    style={styleGrowBtn}
                                    onMouseEnter={this.EnterGrowBtn}>GROW
                            </button>}
                            {(lightsOn && !isStar) &&
                                <button className="lor-btn grow-btn"
                                        onClick={this.HandleStarBtn}
                                        onMouseLeave={this.LeaveGrowBtn}
                                        style={styleGrowBtn}
                                        onMouseEnter={this.EnterGrowBtn}>PUT THE STAR
                                </button>}
                            {isStar && <Star/>}
                            {lightsOn && <Lights/>}
                            <Tree treeGrow={this.state.treeGrow}/>
                            <BackgroundImage/>
                        </div>
                    </div>
                </section>
            </>

        )
    }
}


export default TreeDress