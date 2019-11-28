import React from 'react';
import 'antd/dist/antd.css';
import Head from "../headerfooter/Header";
import Footer from "../headerfooter/Footer";
import RegisterForm from "./RegisterForm";
import './Register.css'


class Register extends React.Component {
    render() {
        return (
            <div>
                <div  className={"body"}>
                    <Head/>
                    <RegisterForm/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Register;

