import React, { Component } from 'react';
import Header from '../../headerfooter/Header';
import Footer from '../../headerfooter/Footer';
import Blockchaintable from './Blockchaintable';
import Searchs from '../Search';
import "./blockchain.css";

class Blockchain extends Component {
  render() {
    return (
      <div>
        <div className={"backimage"}>
            <Header/>
            <div className="search">
                <Searchs />
            </div>
        </div>

        <div className="table">
            <Blockchaintable />
        </div>

        <div>
            <Footer />
        </div>

      </div>
    );
  }
}

export default Blockchain;