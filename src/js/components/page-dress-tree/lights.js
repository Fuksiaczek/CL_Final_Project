import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import '../../../sass/style.scss';

class Lights extends Component
{

    state =
        {
            lightArray: []
        };

    componentDidMount()
    {

        const array = [];
        for (let i = 0; i < 10; i++) {
            array.push(".")
        }
        this.setState({
            lightArray: array
        })

    }


    customLight = () =>
    {
        let font;
        let left;
        let bottom;
        let animationDuration;

        const {lightArray} = this.state;

        for (let i = 0; i < lightArray.length; i++) {

            font = `${(Math.floor((Math.random() * (20 - 5)) + 20))}px`;
            left = `${(Math.floor(Math.random() * (50 - -50)) + -50)}%`;
            bottom = `${(Math.floor(Math.random() * (90 - 0)) + 0)}%`;
            animationDuration = `${(Math.floor(Math.random() * (10 - 5)) + 5)}s`;
        }

        return (
            {fontSize: font,
            left: left,
            bottom: bottom,
            animation: `glow 15s infinite`}
        );
    };

    render() {

        return(
            <>
           {this.state.lightArray.map((element, i) =>
                <section className="lights" key={i}>
                    <div className="light-bulbs-container1">
                        <div className="tree-lights">
                            <p className="light-bulb" style={this.customLight()}>
                                {element}
                            </p>
                            <p className="light-bulb-shadow" style={this.customLight()}>
                                {element}
                            </p>
                        </div>
                    </div>
                    <div className="light-bulbs-container2">
                        <div className="tree-lights">
                            <p className="light-bulb" style={this.customLight()}>
                                {element}
                            </p>
                            <p className="light-bulb-shadow" style={this.customLight()}>
                                {element}
                            </p>
                        </div>
                    </div>
                    <div className="light-bulbs-container3">
                        <div className="tree-lights">
                            <p className="light-bulb" style={this.customLight()}>
                                {element}
                            </p>
                            <p className="light-bulb-shadow" style={this.customLight()}>
                                {element}
                            </p>
                        </div>
                    </div>
                </section>)}
            </>
        )
    }
}

export default Lights;