import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './../../sass/style.scss';

class SnowFlake2 extends Component
{
    render(){
        return(
            <>
                <p>.</p>
            </>
        )
    }
}

class Snow2 extends Component {

    state =
        {
            snowArray: []
        };




    componentDidMount()
        {

        const array = [];
        for (let i = 0; i < 500; i++) {
            array.push(".")
        }
        this.setState({
            snowArray: array
            })

        }

        customSnowflake = () =>
        {
            let font;
            let left;
            let animationDuration;
            let animationNum;
            let animationDelay;

            const {snowArray} = this.state;

            for (let i = 0; i < snowArray.length; i++) {

                font = `${(Math.floor((Math.random() * (50 - 10)) + 50))}px`;
                left = `${(Math.floor(Math.random() * (100 - 0)) + 0)}%`;
                animationDuration = `${(Math.floor(Math.random() * (10 - 8)) + 8)}s`;
                animationDelay = `${(Math.floor(Math.random() * (20 - 1)) + 1)}s`;
                animationNum = `${(Math.floor(Math.random() * (20 - 5)) + 5)}`;
            }
            return (
                {fontSize: font,
                animation: `fall${animationNum} 15s linear infinite`,
                animationDelay: animationDelay,
                left: left,}
            );
        };

    render()
    {
        return (
            <>
                {this.state.snowArray.map((element, i) =>
                    <p key={i} className="Snowflake" style={this.customSnowflake()}>
                        {element}
                    </p>
                )}


            </>
        )
    }

}

export default Snow2;