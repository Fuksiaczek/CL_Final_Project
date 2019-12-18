import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './../../sass/style.scss';

import Snow from "./snow";
import Snow2 from "./snow2";

class MainText extends Component
{
    state =
        {
            currentDay: (24 - new Date().getDate()),
            currentHour: (24 - new Date().getHours()),
            currentMinute: (60 - new Date().getMinutes()),
            //currentSecond: "",
            styleSnowBtn: {},
            letItSnow: false
        }

    componentDidMount() {

        this.intervalId = setInterval( () =>
                this.setState({
                    currentDay: (24 - new Date().getDate()),
                    currentHour: (24 - new Date().getHours()),
                    currentMinute: (60 - new Date().getMinutes()),
                    //currentSecond: (60 - new Date().getSeconds())
                }), 60000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalId)
    }


    EnterSnowBtn = () => {
        this.setState({
            styleSnowBtn: {background: "#911719"}
        });
    };

    LeaveSnowBtn = () => {
        this.setState({
            styleSnowBtn: {}
        });
    };

    HandleSnowBtn = () =>
    {
        if(this.state.letItSnow)
        {
            this.setState({
                letItSnow: false
            })
        }
        else
        {
            this.setState({
                letItSnow: true
            })
        }

    };

    render() {
        const {currentDay, currentHour, currentMinute, currentSecond} = this.state;
        return(
            <>
                {this.state.letItSnow && <Snow2/>}
                <div className="text">
                    <h1>Merry Christmas</h1>
                    <div className="h2">
                        <h2>TO CHRISTMAS IT'S LEFT</h2>
                        <h2>
                            {currentDay} {currentDay !== 1 ? "DAYS" : "DAY"}
                            &nbsp;AND {currentHour}:{currentMinute} HOURS
                        </h2>
                        <button className="lor-btn"
                        style={this.state.styleSnowBtn}
                        onMouseEnter={this.EnterSnowBtn}
                        onMouseLeave={this.LeaveSnowBtn}
                        onClick={this.HandleSnowBtn}>
                            {this.state.letItSnow ? "STOP THE SNOW" : "LET IT SNOW"}
                        </button>
                    </div>
                </div>
            </>
        )
    }
}

export default MainText;