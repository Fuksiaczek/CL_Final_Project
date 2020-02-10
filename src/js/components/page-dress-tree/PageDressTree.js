import React, {Component} from 'react';
import '../../../sass/style.scss';
import TreeDress from "./TreeDress";

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