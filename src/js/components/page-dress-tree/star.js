import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import '../../../sass/style.scss';

class Star extends Component
{



    render() {

        return(
            <>
                <div className="star-box">
                    <div className="star-shadow"/>
                    <div className="star"/>
                </div>
            </>
        )
    }
}

export default Star