import React, {Component} from 'react';
import '../../../sass/style.scss';

class BackgroundImage extends Component
{

    render() {
        return(
            <>
                <div className="graphic">
                    <div className="snow-ground">
                        <div className="snowdrift1"/>
                        <div className="snowdrift2"/>
                        <div className="snowdrift3"/>
                    </div>
                    <div className="tree">
                        <div className="tree-triangle"/>
                    </div>
                </div>
            </>
        )
    }
}

export default BackgroundImage;