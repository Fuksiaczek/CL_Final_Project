import React, {Component} from 'react';
import '../../../sass/style.scss';

class LoadingData extends Component
{
    state =
        {
            widthState: 0,
        };

    componentDidMount() {
        const {widthState} = this.state;
        this.intervalId = setInterval( () =>
        {
            this.setState({
                widthState: this.state.widthState + 1
            });

            if(this.state.widthState === 100)
            {
                this.props.setLogStatus();
                clearInterval(this.intervalId)
            }
        }, 50);




    }



    render() {
        const {widthState} = this.state;
        const divStyle =
            {
                width: widthState + "%",
                height: "30px",

                background: "#b81719"
            };

        return(
            <div className="progress-box">
                <i className="far fa-9x fa-snowflake"/>
                <h2>WE ARE LOADING YOUR CHRISTMAS WISHES...</h2>
                <div className="progress">
                    {widthState !== 100 &&
                        <>
                            <div className="progress-bar" style={divStyle}/>
                        </>}
                </div>
            </div>
        )
    }
}




export default LoadingData