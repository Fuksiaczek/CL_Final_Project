import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './../../sass/style.scss';

import TreeDress from "./tree-dress";


class Game1 extends Component
{

    render() {
        return(
            <>
                <TreeDress login={this.props.login}/>
            </>
        )
    }
}

export default Game1