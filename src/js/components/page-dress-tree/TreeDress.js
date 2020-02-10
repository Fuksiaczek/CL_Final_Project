import React, {Component} from 'react';
import '../../../sass/style.scss';

import BackgroundImage from "../page-main/BackgroundImage";
import Tree from "./Tree";
import Header from "../page-main/Header";
import Lights from "./Lights";
import Star from "./Star";

class TreeDress extends Component
{
    state =
        {
            styleGrowBtn: {},
            treeGrow: 1,
            lightsOn: false,
            isStar: false
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
                                    style={styleGrowBtn}>TURN ON THE LIGHTS
                            </button>):
                                <button className="lor-btn grow-btn"
                                    onClick={this.HandleGrowBtn}
                                    style={styleGrowBtn}>GROW
                            </button>}
                            {(lightsOn && !isStar) &&
                                <button className="lor-btn grow-btn"
                                        onClick={this.HandleStarBtn}
                                        style={styleGrowBtn}>PUT THE STAR
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