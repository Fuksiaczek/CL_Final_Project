import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './../../sass/style.scss';

class LoadingData extends Component
{
    state =
        {
            widthState: 0
        };

    componentDidMount() {
        this.intervalId = setInterval( () =>
        {
            this.setState({
                widthState: this.state.widthState + 1
            });

            if(this.state.widthState === 100)
            {
                clearInterval(this.intervalId)
            }
        }, 100);



    }



    render() {
        const {widthState} = this.state;
        const divStyle =
            {
                width: widthState + "px",
                height: "100px",
                background: "red"
            };
        return(
            <div className="progress">
                {widthState !== 100 ?
                    <div className="progress-bar" style={divStyle}></div>:
                    <span>Dane załadowane!</span>}
            </div>
        )
    }
}




export default LoadingData