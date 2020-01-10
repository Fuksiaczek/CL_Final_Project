import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import '../../../sass/style.scss';

import TreeDress from "./tree-dress";

class PageDressTree extends Component
{

    render() {
        return(
            <>
                <TreeDress login={this.props.login} setClearLogin={this.props.setClearLogin}/>
            </>
        )
    }
}

export default PageDressTree