import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './../../sass/style.scss';

class LogIn extends Component
{
    render() {
        return(
            <>
                <div className="lor-background">
                    <form>
                        <label>LOGIN</label>
                        <input type="text"
                               name="login"
                               value={this.props.value}
                               placeholder="your login"/>
                        <label>PASSWORD</label>
                        <input type="password"
                               name="password"
                               value={this.props.value}
                               placeholder="your password"/>
                        <button type="submit lor-btn">LOG IN</button>
                    </form>
                </div>
            </>
         )
    }
}

export default LogIn;