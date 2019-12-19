import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import '../../sass/style.scss';

class Lights extends Component
{

    state =
        {
            lightArray: []
        };

    componentDidMount()
    {

        const array = [];
        for (let i = 0; i < 30; i++) {
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

        const {lightArray} = this.state;

        for (let i = 0; i < lightArray.length; i++) {

            font = `${(Math.floor((Math.random() * (20 - 5)) + 20))}px`;
            left = `${(Math.floor(Math.random() * (100 - 0)) + 0)}%`;
            bottom = `${(Math.floor(Math.random() * (90 - 0)) + 0)}%`;
        }
        return (
            {fontSize: font,
            left: left,
            bottom: bottom}
        );
    };

    render() {

        return(
            <>
                <div className="light-bulbs-container">
                    <div className="tree-lights">
                        {this.state.lightArray.map((element, i) =>
                            <>
                                <p key={i}>
                                    <p className="light-bulb" style={this.customLight()}>
                                        {element}
                                    </p>
                                    <p className="light-bulb-shadow" style={this.customLight()}>
                                        {element}
                                    </p>
                                </p>
                            </>)}
                    </div>
                </div>
            </>
        )
    }
}

export default Lights;