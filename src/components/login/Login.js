import React, {Component} from 'react';
import LoginForm from './LoginForm'
import './Login.css';
import Head from "../headerfooter/Header";
import Footer from "../headerfooter/Footer";


class Login extends Component{
    render() {
        return(
            <div>

                <div  className={"contentLogin"}>
                    <Head/>
                    <LoginForm/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Login;