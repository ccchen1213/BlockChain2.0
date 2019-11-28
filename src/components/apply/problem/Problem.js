import React, {Component} from 'react';
import ProContent from './ProContent';

import { Layout, Breadcrumb, Icon } from 'antd';
import {Link} from "react-router-dom";
import Menus from "../Menus";
import Header from "../../headerfooter/Header";
import Footer from "../../headerfooter/Footer";

const { Content, Sider } = Layout;

class Problem extends Component{
    render() {
        return (
            <Layout>
                <Header/>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item><Link to="/Home"> 首页 </Link><Icon type="right" /></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to="/Problem">理赔中心</Link><Icon type="right" /></Breadcrumb.Item>
                        <Breadcrumb.Item>常见问题</Breadcrumb.Item>
                    </Breadcrumb>

                    <Layout style={{ padding: '24px 0', background: '#fff' }}>
                        <Sider width={200} style={{ background: '#fff' }}>
                            <Menus/>
                        </Sider>
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>
                            <ProContent/>
                        </Content>
                    </Layout>
                </Content>
                <Footer/>
            </Layout>
        )
    }
}

export default Problem;