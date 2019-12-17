import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './../../sass/style.scss';

class BackgroundImage extends Component
{
    render() {
        return(
            <>
                <div className="graphic">
                    <div className="snow-ground">
                        <div className="snowdrift1"></div>
                        <div className="snowdrift2"></div>
                        <div className="snowdrift3"></div>
                    </div>
                    <div className="tree">
                        <div className="tree-triangle"></div>
                    </div>
                </div>
            </>
        )
    }
}

export default BackgroundImage;