import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import '../../sass/style.scss';

class Star extends Component
{



    render() {

        return(
            <>
                <div className="star-box">
                    <div className="star-shadow"></div>
                    <div className="star"></div>
                </div>
            </>
        )
    }
}

export default Star