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
        for (let i = 0; i < 100; i++) {
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

            const {snowArray} = this.state;

            for (let i = 0; i < snowArray.length; i++) {

                font = `${(Math.floor((Math.random() * (50 - 10)) + 50))}px`;
                left = `${(Math.floor(Math.random() * (70 - -70)) + -70)}%`;
            }
            return (
                {fontSize: font,
                animation: "fall 15s linear infinite",
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