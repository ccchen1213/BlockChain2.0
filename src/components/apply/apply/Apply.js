import React, { Component } from 'react';
import { Layout, Breadcrumb, Icon } from 'antd';
import Header from "../../headerfooter/Header";
import ProContent from "../problem/ProContent";
import Footer from "../../headerfooter/Footer";
import ApplyForm from "./ApplyForm";
import Menus from "../Menus";
import './Apply.css'
import {Link} from "react-router-dom";
const { Content, Sider } = Layout;

class Apply extends Component {
    render() {
        return (

            <Layout>
                <Header/>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item><Link to="/Home"> 首页 </Link><Icon type="right" /></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to="/Problem">理赔中心</Link><Icon type="right" /></Breadcrumb.Item>
                        <Breadcrumb.Item>申请理赔</Breadcrumb.Item>
                    </Breadcrumb>

                    <Layout style={{ padding: '24px 0', background: '#fff' }}>
                        <Sider width={200} style={{ background: '#fff' }}>
                            <Menus/>
                        </Sider>
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>
                            <ApplyForm/>
                        </Content>
                    </Layout>
                </Content>
                <Footer/>
            </Layout>





        )
    }
}

export default Apply;