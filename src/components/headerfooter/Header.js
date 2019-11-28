import {Menu, Icon, Layout} from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import 'antd/dist/antd.css';

const { Header } = Layout;
class Head extends React.Component {
    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <Header>
                <div className="logo"/>
                <Link to="/Index" className={"title"}>基于区块链的车辆事故理赔系统</Link>
                <Menu
                    theme={"dark"}
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                    className={"menu"}>
                    <Menu.Item key="index">
                        <Link to="/Home"><Icon type="home" />
                        首页</Link>
                    </Menu.Item>

                    <Menu.Item key="blockChain">
                        <Link to="/BlockChain"><Icon type="appstore" />
                        区块链</Link>
                    </Menu.Item>

                    <Menu.Item key="Claims center">
                        <Link to="/Problem"><Icon type="form" />
                        理赔中心</Link>
                    </Menu.Item>

                    <Link to="/Login">登录</Link>
                </Menu>


            </Header>
        );
    }
}

export default Head;