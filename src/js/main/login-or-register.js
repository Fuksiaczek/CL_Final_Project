import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './../../sass/style.scss';

class LoginOrRegister extends Component
{


    render() {
        return(
            <>
                <div className="login-or-register">
                    <button className="log-in-btn lor-btn">LOG IN</button>
                    <button className="register-btn lor-btn">REGISTER</button>
                </div>
            </>
        )
    }
}

export default LoginOrRegister;