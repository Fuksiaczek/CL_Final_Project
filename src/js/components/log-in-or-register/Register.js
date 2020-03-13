import React, {Component} from 'react';
import '../../../sass/style.scss';

class Register extends Component
{
    state =
        {
            styleGoBackBtn: {},
            goBack: false,
            regLoginAvailable: true,
            newUser:
                {
                    name: "",
                    surname: "",
                    email: "",
                    login: "",
                    password: ""
                },
            passwordConfirm: "",
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
    };

    onChangeName = (e) =>
    {
        this.setState({
            newUser:
            {
                name: e.target.value,
                surname: this.state.newUser.surname,
                email: this.state.newUser.email,
                login: this.state.newUser.login,
                password: this.state.newUser.password,
            }
        });
    };

    onChangeSurname = (e) =>
    {
        this.setState({
            newUser:
                {
                    name: this.state.newUser.name,
                    surname: e.target.value,
                    email: this.state.newUser.email,
                    login: this.state.newUser.login,
                    password: this.state.newUser.password,
                }
        });
    };

    onChangeEmail = (e) =>
    {
        this.setState({
            newUser:
                {
                    name: this.state.newUser.name,
                    surname: this.state.newUser.surname,
                    email: e.target.value,
                    login: this.state.newUser.login,
                    password: this.state.newUser.password,
                }
        });

    };

    onChangeLogin = (e) =>
    {
        this.setState({
            newUser:
                {
                    name: this.state.newUser.name,
                    surname: this.state.newUser.surname,
                    email: this.state.newUser.email,
                    login: e.target.value,
                    password: this.state.newUser.password,
                }
        });
    };

    onChangePassword = (e) =>
    {
        this.setState({
            newUser:
                {
                    name: this.state.newUser.name,
                    surname: this.state.newUser.surname,
                    email: this.state.newUser.email,
                    login: this.state.newUser.login,
                    password: e.target.value,
                }
        });
    };

    onChangePasswordConfirm = (e) =>
    {

        this.setState({
            passwordConfirm: e.target.value
        });

    };

    onSubmit = (e) =>
    {
        e.preventDefault();

        const url = "http://localhost:3000";
        const {name, surname, email, login, password} = this.state.newUser;

        if(name && surname && email && login && password && this.state.passwordConfirm)
        {
            $.ajax({
                method: "POST",
                url: url + "/users",
                dataType: "json",
                data: {"id":"", name, surname, email, login, password}
            });

            this.setState({
                newUser:
                    {
                        name: "",
                        surname: "",
                        email: "",
                        login: "",
                        password: "",
                    },
                passwordConfirm: ""
            });
        }
    };



render() {
    const {name, surname, email, login, password} = this.state.newUser;
    const {passwordConfirm} = this.state;
        return(
            <>
                <div className="lor-background">
                    <form onSubmit={this.onSubmit}>
                        <label>NAME</label>
                        <input type="text"
                               name="name"
                               value={name}
                               placeholder="your name"
                               onChange={this.onChangeName}/>
                        <label>SURNAME</label>
                        <input type="text"
                               name="surname"
                               value={surname}
                               placeholder="your surname"
                               onChange={this.onChangeSurname}/>
                        <label>EMAIL</label>
                        <input type="email"
                               name="email"
                               value={email}
                               placeholder="your email"
                               onChange={this.onChangeEmail}/>
                        <label>LOGIN</label>
                        <input type="text"
                               name="login"
                               value={login}
                               placeholder="your login"
                               onChange={this.onChangeLogin}/>
                        <label>PASSWORD</label>
                        <input type="password"
                               name="password"
                               value={password}
                               placeholder="your password"
                               onChange={this.onChangePassword}/>
                        <label>PASSWORD</label>
                        <input type="password"
                               name="password"
                               value={passwordConfirm}
                               placeholder="repeat your password"
                               onChange={this.onChangePasswordConfirm}/>
                        <input type="submit" className="submit" value="REGISTER"/>
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