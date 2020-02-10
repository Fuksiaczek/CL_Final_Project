import React, {Component} from 'react';
import '../../../sass/style.scss';

import Snow from "../snow/Snow";

class MainText extends Component
{
    state =
        {
            currentDay: ((366-8) - new Date().getDate()),
            currentHour: (24 - new Date().getHours()),
            currentMinute: (60 - new Date().getMinutes()),
            styleSnowBtn: {},
            letItSnow: false
        };

    componentDidMount() {

        this.intervalId = setInterval( () =>
                this.setState({
                    currentDay: (366-8 - new Date().getDate()),
                    currentHour: (24 - new Date().getHours()),
                    currentMinute: (60 - new Date().getMinutes()),
                }), 60000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalId)
    }

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
                {this.state.letItSnow && <Snow/>}
                <div className="text">
                    <h1>Merry Christmas</h1>
                    <div className="h2">

                        <h2>
                            <span>{currentDay}</span> {currentDay !== 1 ? "DAYS" : "DAY"}
                            &nbsp;AND <span>{currentHour<10 ? "0"+currentHour : currentHour}:
                            {currentMinute<10 ? "0"+currentMinute : currentMinute}</span> HOURS
                        </h2>
                        <h2>LEFT FOR CHRISTMAS</h2>
                        <button className="lor-btn"
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