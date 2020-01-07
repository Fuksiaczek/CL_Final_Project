import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import '../../../sass/style.scss';

import DressTree from "./tree-dress";

class PageDressTreePage extends Component
{

    render() {
        return(
            <>
                <TreeDress login={this.props.login} setClearLogin={this.props.setClearLogin}/>
            </>
        )
    }
}

export default PageDressTreePage