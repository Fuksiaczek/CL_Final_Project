import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './../../sass/style.scss';

class MainText extends Component
{
    render() {
        return(
            <>
                <div className="text">
                    <h1>Merry Christmas</h1>
                    <div className="h2">
                        <h2>TO CHRISTMAS IT'S LEFT</h2>
                        <h2>10 DAYS AND 06:30 HOURS</h2>
                    </div>
                </div>
            </>
        )
    }
}

export default MainText;