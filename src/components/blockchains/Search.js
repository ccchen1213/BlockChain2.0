import React, { Component } from 'react';
import 'antd/dist/antd.css';
//import './index.css';
import { Input } from 'antd';

const { Search } = Input;

class Searchs extends Component {
  render() {
    return (
      <div>
        <Search
          placeholder="搜索"
          onSearch={value => console.log(value)}
          size="large"
          style={{ height:40}}
        />
      </div>
    );
  }
}

export default Searchs;