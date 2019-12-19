import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

import './../../sass/style.scss';

import BackgroundImage from "../main/background-image";
import Tree from "./tree";

import Header from "../main/header";
import Lights from "./lights";


class TreeDress extends Component
{
    state =
        {
            styleGrowBtn: {},
            treeGrow: 1,
            lightsOn: false
        }

    EnterGrowBtn = () => {
        this.setState({
            styleGrowBtn: {background: "#911719"},
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





    render() {
        const {styleGrowBtn} = this.state;
        return(
            <>
                <Header/>
                <section className="background-image ">
                    <div className="container">
                        <div className="sky">
                            {this.state.treeGrow === 4 ?
                            <button className="lor-btn grow-btn"
                                    onClick={this.HandleGrowBtn}
                                    onMouseLeave={this.LeaveGrowBtn}
                                    style={styleGrowBtn}
                                    onMouseEnter={this.EnterGrowBtn}>TURN ON THE LIGHTS
                            </button>:
                            <button className="lor-btn grow-btn"
                                    onClick={this.HandleGrowBtn}
                                    onMouseLeave={this.LeaveGrowBtn}
                                    style={styleGrowBtn}
                                    onMouseEnter={this.EnterGrowBtn}>GROW
                            </button>}

                            <Lights treeGrow={this.state.treeGrow}/>
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