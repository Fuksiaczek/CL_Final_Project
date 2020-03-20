import React, {Component} from 'react';
import BackgroundImage from "./BackgroundImage";
import MainText from "./MainText";
import LoginOrRegister from "../log-in-or-register/LoginOrRegister";
import Header from "./Header";
import "../../../sass/style.scss";
import users from "../../../data/users.json";

class PageMain extends Component {

    state =
        {
            isLogIn: false,
            //login: ""
            data: []
        };



    checkoutRegister = () =>
    {
        const url = "http://localhost:3000";
        $.ajax({
            method: "GET",
            url: url + "/users",
        }).done(response => {
            this.setState({
                data: response
            });
        }).fail(error => {
            console.error(error);
        });
    };



    setLogStatus = () =>
    {
        this.setState({
            isLogIn: true,
        })
    };

    setLogOut = () =>
    {
        this.setState({
            isLogIn: false,
        })
    };

    // setLogin = (user) =>
    // {
    //     this.setState({
    //         login: user
    //     })
    // }

    render() {
        const {isLogIn, data} = this.state;
        const {login} = this.props;
        return(
            <>
                <Header isLogIn={isLogIn}
                        login={login}
                        setLogOut={this.setLogOut}
                        setClearLogin={this.props.setClearLogin}/>


                <section className="background-image ">
                    <div className="container">
                        <div className="sky">
                            {isLogIn ? <MainText/> :
                            <LoginOrRegister
                                usersLogIn={users.users}
                                setLogStatus={this.setLogStatus}
                                setLogin={this.props.setLogin}
                                data={data}
                                checkoutRegister={this.checkoutRegister}/>
                                }

                            <BackgroundImage/>

                        </div>
                    </div>
                </section>
            </>
        )
    }


}


export default PageMain;