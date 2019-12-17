import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './../../sass/style.scss';

class LogIn extends Component
{
    //const {name, password} = this.props;
    render() {
        return(
            <>
                <div className="lor-background">
                    <form>
                        <label>Login
                            <input type="text"
                                   name="name"
                                   value={this.props.value}
                                   placeholder="your login"/>
                        </label>
                        <label>Password
                            <input type="password"
                                   name="password"
                                   value={this.props.value}
                                   placeholder="your password"/>
                        </label>
                    </form>
                </div>
            </>
         )
    }
}

export default LogIn;