import React, { Component } from 'react';
import 'antd/dist/antd.css';
//import './index.css';
import { Input } from 'antd';

const { Search } = Input;

class Decrypt extends Component {
  render() {
    return (
        <Search
        placeholder="密钥"
        enterButton="解密"
        size="large"
        onSearch={value => console.log(value)}
      />
    );
  }
}

export default Decrypt;