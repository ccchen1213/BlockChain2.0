import React, { Component } from 'react';
import Header from '../../headerfooter/Header';
import Footer from '../../headerfooter/Footer';
import Depositdetailstable from './Depositdetailstable';
//import Searchs from '../Search';
import "./depositdetail.css";
import Searchs from "../Search";

class Depositdetails extends Component {
  render() {
    return (
        <div className={"detail_body"}>
            <div className={"backimage"}>
                <Header/>
            </div>

            <div className="detail">
                <Depositdetailstable />
            </div>

            <div>
                <Footer />
            </div>

        </div>
    );
  }
}

export default Depositdetails;