import React, { Component } from 'react';
import "antd/dist/antd.css";
import axios from 'axios';
import Decrypt from "./Decrypt";
import { Card, Col, Row } from 'antd';



class Depositdetailstable extends Component{


     constructor(props) {
        super(props);
        /* this.state={depositdetails:[]} */     /*  连接时用这个this.state */
        this.state={depositdetails:{"project" : "保全链锚定",
                                    "depositNumber" : "5dace11e42ec363cacf2a6216383db2e42748b038e18811deea2f6194af9248c",
                                    "serialNumber" : "4d27c3e1073e4a809d7f17f3036c0068",
                                    "partner" : "shuqin",
                                    "depositUseraccount" : "shuqin",
                                    "windingTime" : "2019-11-19 17:42:20",
                                    "depositInformation" : "56580000002c463e411d0c74f814acd0207c11ac0d4367c6250f0a638736be4448dcde9c67c1e587",
                                    "extendedInformation" : "",
                                    "blockHeight" : "8681290",
                                    "blockHash" : "45e8be25c8396e01127c45ed98e431ec7c4f43684dd0489fa2ced1351ecc18d0"}
        }
    }

    //当组件输出到 DOM 后会执行 componentDidMount()
   /*  componentDidMount(){
        axios.post('')  //url
            .then(function (res) {
                this.setState({
                    depositdetails:res.data.depositdetails,
                })
            })
            .catch(function (err) {
                console.log(err);
            })
    } 
 */
    render() {

        let {depositdetails} = this.state; 


        return (
            <Card title="存证详情"  extra={<Decrypt />} style={{ width: "65%" }}>
                <Row>
                    <Col span={4}><span class="smalltitle">存证项目:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></Col>
                    <Col span={20}> {depositdetails.project} </Col>
                </Row>
                <br/>
                <Row>
                    <Col span={4}><span class="smalltitle">存证号:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></Col>
                    <Col span={20}>{depositdetails.depositNumber} </Col>
                </Row>
                <br/>
                <Row>
                    <Col span={4}><span class="smalltitle">流水号:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></Col>
                    <Col span={20}>{depositdetails.serialNumber} </Col>
                </Row>
                <br/>
                <Row>
                    <Col span={4}><span class="smalltitle">存证合作方:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></Col>
                    <Col span={20}>{depositdetails.partner} </Col>
                </Row>
                <br/>
                <Row>
                    <Col span={4}><span class="smalltitle">存证用户账户名:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></Col>
                    <Col span={20}>{depositdetails.depositUseraccount} </Col>
                </Row>
                <br/>
                <Row>
                    <Col span={4}><span class="smalltitle">上链时间:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></Col>
                    <Col span={20}>{depositdetails.windingTime} </Col>
                </Row>
                <br/>
                <Row>
                    <Col span={4}><span class="smalltitle">存证信息:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></Col>
                    <Col span={20}>{depositdetails.depositInformation} </Col>
                </Row>
                <br/>
                <Row>
                    <Col span={4}><span class="smalltitle">扩展存证信息:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></Col>
                    <Col span={20}>{depositdetails.extendedInformation} </Col>
                </Row>
                <br/>
                <Row>
                    <Col span={4}><span class="smalltitle">所在区块高度:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></Col>
                    <Col span={20}>{depositdetails.blockHeight} </Col>
                </Row>
                <br/>
                <Row>
                    <Col span={4}><span class="smalltitle">所在区块哈希:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></Col>
                    <Col span={20}>{depositdetails.blockHash} </Col>
                </Row>
            </Card>
        )
    }
}

export default Depositdetailstable;