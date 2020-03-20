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
            passwordVal: null,
            loginIsAvailable: null,
        };

    HandleGoBackBtn = (e) => {
        e.preventDefault();
        this.props.isGoBackRegister();
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
        const {data} = this.props;

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

        if(e.target.value)
        {
            let counter = 0;

            for (let i = 0; i < data.length; i++)
            {
                if(e.target.value.trim() === data[i].login.trim())
                {
                    counter += 1;
                }
            }

            if(counter === 0)
            {
                this.setState(
                    {
                        loginIsAvailable: true,
                    });
            }
            else
            {
                this.setState(
                    {
                        loginIsAvailable: false,
                    });
            }
        }
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

        if(this.state.newUser.password.trim() === e.target.value.trim())
        {
            this.setState({
                passwordVal: true
            });
        }
        else
        {
            this.setState({
                passwordVal: false
            });
        }

        if(this.state.passwordVal)
        {
            this.setState({
                passwordConfirm: e.target.value
            });
        }
        else
        {
            this.setState({
                passwordConfirm: ""
            });
        }
    };

    onSubmit = (e) =>
    {
        e.preventDefault();

        const url = "http://localhost:3000";
        const {name, surname, email, login, password} = this.state.newUser;
        const {passwordConfirm, loginIsAvailable} = this.state;
        const {data} = this.props;
        console.log(data);

        if(name && surname && email && login && password && passwordConfirm && loginIsAvailable)
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
                passwordConfirm: "",
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
                        <input type="submit"
                               className="submit lor-btn-small"
                               value="REGISTER"/>
                        <button className="back-btn lor-btn-small"
                                onClick={this.HandleGoBackBtn}>
                            <i className="fas fa-chevron-left"/> GO BACK
                        </button>
                        <div className="lor-error-info">
                        {(this.state.loginIsAvailable === false) && <h3>login is not available, try again</h3>}
                        </div>
                    </form>

                </div>
            </>
        )
    }
}

export default Register;