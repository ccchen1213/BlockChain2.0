import React, {Component} from 'react';
import './Home.css';
import Head from "../headerfooter/Header";
import Footer from "../headerfooter/Footer";
import Title from './Title';
import Introduce from './Introduce';


class Home extends Component{
    render() {
        return (
            <div>
                <div className={"content"}>
                    <Head/>
                    <Title/>
                </div>
                <Introduce/>
                <Footer/>
            </div>
        )
    }
}

export default Home;