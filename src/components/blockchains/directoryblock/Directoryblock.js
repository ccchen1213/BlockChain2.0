import React, { Component } from 'react';
import Header from '../../headerfooter/Header';
import Footer from '../../headerfooter/Footer';
import Directoryblocktable from './Directoryblocktable';
import Transactionstable from './Transactionstable';
import Searchs from '../Search';
import "./directoryblock.css";

class Directoryblock extends Component {
  render() {
    return (
        <div>
        <div className={"backimage"}>
            <Header/>
            <div className="search">
                <Searchs />
            </div>
        </div>

        <div className="directory_block">
            <h2 className="oneoftitle">DIRECTORY BLOCK</h2>
            <div className="table">
                <Directoryblocktable />
            </div> 
        </div>

        <div className="transactions">
            <h2 className="oneoftitle">Transactions</h2>
            <div className="table">
                <Transactionstable />
            </div> 
        </div>


        <div>
            <Footer />
        </div>

        </div>
    );
  }
}

export default Directoryblock;