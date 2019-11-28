import React, { Component } from 'react';
import "antd/dist/antd.css";
//import "./index.css";
import { Table } from "antd";
import { Link } from 'react-router-dom';



class Blockchaintable extends Component {
  
  constructor(props) {
    super(props);
     /* this.state={blockChain_List:[]}  */
    this.state={blockChain_List:[{"height":"11","hush":"111132c18d398c29134c6e8051cd64c8f7167fdefc63","transactions": "4","time" : "2018-1-5 9:0:0"},
                                {"height":"222222","hush":"22232c18d398c29134c6e8051cd64c8f7167fdefc63","transactions": "4","time" : "2018-1-5 9:0:0"},
                                {"height":"333333","hush":"333332c18d398c29134c6e8051cd64c8f7167fdefc63","transactions": "4","time" : "2018-1-5 9:0:0"},
                                {"height":"444444","hush":"44444432c18d398c29134c6e8051cd64c8f7167fdefc63","transactions": "4","time" : "2018-1-5 9:0:0"},
                                {"height":"555555","hush":"5555552c18d398c29134c6e8051cd64c8f7167fdefc63","transactions": "4","time" : "2018-1-5 9:0:0"},
                                {"height":"666666","hush":"6666662c18d398c29134c6e8051cd64c8f7167fdefc63","transactions": "4","time" : "2018-1-5 9:0:0"},                              
                                {"height":"777777","hush":"77777772c18d398c29134c6e8051cd64c8f7167fdefc63","transactions": "4","time" : "2018-1-5 9:0:0"},
                                {"height":"888888","hush":"888882c18d398c29134c6e8051cd64c8f7167fdefc63","transactions": "4","time" : "2018-1-5 9:0:0"},
                                {"height":"999999","hush":"9999992c18d398c29134c6e8051cd64c8f7167fdefc63","transactions": "4","time" : "2018-1-5 9:0:0"},
                                {"height":"101010","hush":"1010102c18d398c29134c6e8051cd64c8f7167fdefc63","transactions": "4","time" : "2018-1-5 9:0:0"},
                                {"height":"119011","hush":"1010102c18d398c29134c6e8051cd64c8f7167fdefc63","transactions": "4","time" : "2018-1-5 9:0:0"},
                                {"height":"121212","hush":"1122212112c18d398c29134c6e8051cd64c8f7167fdefc63","transactions": "4","time" : "2018-1-5 9:0:0"},
                              ]
    }
  }

//当组件输出到 DOM 后会执行 componentDidMount()
/*    componentDidMount(){
    axios.post('')  //url
        .then(function (res) {
            this.setState({
              blockChain_List:res.data.blockChain_List,
            })
        })
        .catch(function (err) {
            console.log(err);
        })
  }  */ 
  render() {
    let { blockChain_List } = this.state;

    const columns = [
      {
        title: "Height",
        dataIndex: "height",
        key: "height",
      },
      {
        title: "Hush",
        dataIndex: "hush",
        key: "hush",
        render: text => <Link to ="/Directoryblock">{text}</Link>,
      },
      {
        title: "Transactions",
        dataIndex: "transactions",
        key: "transactions"
      },
      {
        title: "Time",
        dataIndex: "time",
        key: "time"
      },
    ];

    return (
      <Table columns={columns} dataSource={blockChain_List}/>
    );
  }
}

export default Blockchaintable;