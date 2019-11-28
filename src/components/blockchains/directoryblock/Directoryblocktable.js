import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "antd/dist/antd.css";
import { Descriptions} from "antd";

class Directoryblocktable extends Component{

  constructor(props) {
    super(props);
    /* this.state={directoryblock:[]} */
    this.state={directoryblock:{"blockHeight":"2911827",
                                "previousBlock":"68c4a774f3e48b7f26b3db6b9e38e384557546d80b2f967de9cd65d1bd880220",
                                "blockHash":"51e8fece63089e1b858941e6caa4c4c4e6a91506435af5e86d6509c0630b5b67",
                                "nextBlock":"05d3e52845baa86dacef096f58d094d2e894d9f1efbb6fcf978de9b43819fc6f",
                                "created":"2019-11-20 14:10:52",
                                "bropTransaction":"df8cd8721c0881576fd925fb54a710af55c5a3481ecb647073fb0bea0a2fb3ac"}
    }
  }

//当组件输出到 DOM 后会执行 componentDidMount()
/*   componentDidMount(){
    axios.post('')  //url
        .then(function (res) {
            this.setState({
              directoryblock:res.data.directoryblock,
            })
        })
        .catch(function (err) {
            console.log(err);
        })
  }  */


  render() {

    let { directoryblock } = this.state;

    return (
      <Descriptions bordered column={1}>
        <Descriptions.Item label="Block height:"> {directoryblock.blockHeight }</Descriptions.Item>

        {/* 链接到前一条链 还不会写*/}
        <Descriptions.Item label="Previous Block Hash:" >
          <Link to="/Directoryblock">{directoryblock.previousBlock}</Link>
        </Descriptions.Item>
        
        <Descriptions.Item label="Block Hash:"> {directoryblock.blockHash}</Descriptions.Item>
        
        {/* 链接到后一条链 还不会写*/}
        <Descriptions.Item label="Next Block Hash:">
          <Link to="/Directoryblock">{directoryblock.nextBlock}</Link>
        </Descriptions.Item>
        
        <Descriptions.Item label="Created:">{directoryblock.created}</Descriptions.Item>

        {/* 链接到存证详情页面 */}
        <Descriptions.Item label="BROP Transaction:">
          <Link to="/Depositdetails">{directoryblock.bropTransaction}</Link>
        </Descriptions.Item>

      </Descriptions>
    )
  }
}

export default Directoryblocktable;
