import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './../../sass/style.scss';
import users from "./../data/users";

class Register extends Component
{


    // componentDidMount() {
    //     fetch('./../data/users').then( resp => {
    //         console.log( resp );
    //     });
    // }

    state =
        {
            styleGoBackBtn: {},
            goBack: false
        };


    EnterGoBackBtn = () => {
        this.setState({
            styleGoBackBtn: {
                background: "#911719",
                cursor: "pointer"}
        });
    };

    LeaveGoBackBtn = () => {
        this.setState({
            styleGoBackBtn: {}
        });
    };

    HandleGoBackBtn = (e) => {
        e.preventDefault();
        this.props.isGoBackRegister();
    };


render() {
        return(
            <>
                <div className="lor-background">
                    <form>
                        <label>NAME</label>
                        <input type="text"
                               name="name"
                               value={this.props.value}
                               placeholder="your name"/>
                        <label>SURNAME</label>
                        <input type="text"
                               name="surname"
                               value={this.props.value}
                               placeholder="your surname"/>
                        <label>EMAIL</label>
                        <input type="email"
                               name="email"
                               value={this.props.value}
                               placeholder="your email"/>
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
                        <label>PASSWORD</label>
                        <input type="password"
                               name="password"
                               value={this.props.value}
                               placeholder="repeat your password"/>
                        <input type="submit" className="submit" value="LOG IN"/>
                        <button className="back-btn"
                                onMouseEnter={this.EnterGoBackBtn}
                                onMouseLeave={this.LeaveGoBackBtn}
                                onClick={this.HandleGoBackBtn}
                                style={this.state.styleGoBackBtn}>
                            <i className="fas fa-chevron-left"/> GO BACK
                        </button>
                    </form>
                </div>
            </>
        )
    }
}

export default Register;