import React, { Component } from 'react';
import {Form, Input, Button, Radio, Icon} from 'antd';
import { Row, Col } from 'antd';
import { Select } from 'antd';
import { Upload, message, Modal} from 'antd';
import axios from "axios";
import {Redirect} from "react-router";
const { Option } = Select;

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}


class ApplyForm extends React.Component {
    state = {
        previewVisible: false,
        previewImage: '',
        fileList: [],
        applyFlag:false
    };

    handleSubmit = e => {
        // e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                //如果没有错误，则发送用户信息给后端
                console.log('Received values of form: ', values);
                axios.post('http://localhost:2560/apply', {values})
                    .then(res => {
                        console.log(res);
                        if(res.data.state === "success"){
                            this.setState({applyFlag:true})
                        }
                        else{
                            this.setState({applyFlag:false});
                            message.error(res.data.msg);

                        }
                    })
                    .catch(err => {
                        console.log(err);
                        this.setState({
                            applyFlag:false
                        })
                    });
            }

            else{
                message.error('申请信息有误！');
            }

        });
    };

    handleCancel = () => this.setState({ previewVisible: false });

    handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
        });
    };

    handleChange = ({ fileList }) => this.setState({ fileList });

    render() {
        if(this.state.applyFlag){
            return <Redirect to="/Progress"/>
        }
        const { getFieldDecorator } = this.props.form;
        const { previewVisible, previewImage, fileList } = this.state;

        //图片上传按钮
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );

        //保险单上传
        const invoiceProps = {
            name: 'file',
            action: '',//保险单上传接口
            headers: {
                authorization: 'authorization-text',
            },
            onChange(info){
                if(info.file.status !== 'uploading'){
                    console.log(info.file, info.fileList);
                }
                if(info.file.status === 'done'){
                    message.success(`${info.file.name} 上传成功`);
                }
                else if(info.file.status === 'error'){
                    message.error(`${info.file.name}上传失败`);
                }
            }
        };

        return (


            <Form onSubmit={this.handleSubmit}
                  className={'applyForm'}
                >
                <Row>
                    <Col span={12}><h2>申请理赔</h2></Col>
                </Row>
                <Row>
                    <Col span={12}>

                    <Form.Item label="姓名">
                        {getFieldDecorator('name', {
                            rules: [
                                { required: true, message: '请输入您的姓名' },
                                {
                                    pattern:new RegExp('^[\u4e00-\u9fa5]+$','g'),
                                    message:'真实姓名有误'
                                }
                            ],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                style={{width:260}}
                                placeholder="请输入您的姓名"
                            />,
                        )}
                    </Form.Item>
                    </Col>

                    <Col span={12}>
                    <Form.Item label="电话">
                        {getFieldDecorator('phone', {
                            rules: [
                                { required: true, message: '请输入您的手机号' },
                                {
                                    pattern:new RegExp('^1[3456789]\\d{9}$','g'),
                                    message:'请输入正确的手机号'
                                }
                            ],
                        })(
                            <Input
                                prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="text"
                                style={{width:260}}
                                placeholder="请输入您的手机号"
                            />,
                        )}
                    </Form.Item>
                    </Col>
                </Row>

                <Row>
                    <Col span={12}>
                        <Form.Item label="性别">
                            {getFieldDecorator('gender', {
                                initialValue:1,
                                rules: [{ required: true, message: '请选择您的性别' }],
                            })(<Radio.Group className={"gender"}>
                                <Radio value={1}>男</Radio>
                                <Radio value={0}>女</Radio>
                            </Radio.Group>)}
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item label="保险单号">
                            {getFieldDecorator('insureNum', {
                                rules: [{ required: true, message: '请输入您的保险单号' }],
                            })(
                                <Input
                                    prefix={<Icon type="key" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    style={{width:260}}
                                    placeholder="请输入您的保险单号"
                                />,
                            )}
                        </Form.Item>
                    </Col>
                </Row>

                <Row>
                    <Col span={12}>
                        <Form.Item label="身份证">
                            {getFieldDecorator('idNum', {
                                rules: [
                                    { required: true, message: '请输入您的身份证' },
                                    {
                                        pattern:new RegExp('^[1-9]\\d{5}(18|19|20)\\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\\d{3}[0-9Xx]$','g'),
                                        message:'身份证号有误'
                                    }
                                ],

                            })(
                                <Input
                                    prefix={<Icon type="idcard" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    style={{width:260}}
                                    placeholder="请输入您的身份证"
                                />,
                            )}
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item label="车险类型">
                            {getFieldDecorator('carInsure', {
                                rules: [{ required: true, message: '请选择您购买的车险类型' }],
                            })(
                                <Select placeholder="请选择您购买的车险类型" style={{width:260}}>
                                    <Option value="trafficInsure">交强险</Option>
                                    <Option value="damageInsure">车辆损失险</Option>
                                    <Option value="thirdInsure">第三者责任险</Option>
                                    <Option value="stoleInsure">全车盗抢险</Option>
                                    <Option value="deviceInsure">设备损失险</Option>
                                </Select>,
                            )}
                        </Form.Item>
                    </Col>
                </Row>

                <Row>
                    <Col span={12}>
                        <Form.Item label="理赔金额">
                            {getFieldDecorator('count', {
                                rules: [{ required: true, message: '请输入您的理赔金额（元）' }],
                            })(
                                <Input
                                    prefix={<Icon type="pay-circle" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    style={{width:260}}

                                    placeholder="请填写您的申请理赔金额"
                                />,
                            )}
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item label="住址">
                            {getFieldDecorator('location', {
                                rules: [
                                    { required: true, message: '请输入您的住址' }
                                    ],
                            })(
                                <Input
                                    prefix={<Icon type="bank" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="text"
                                    style={{width:260}}
                                    placeholder="请输入您的住址"
                                />,
                            )}
                        </Form.Item>
                    </Col>
                </Row>

                <Row>
                    <Col span={12}>
                        <Form.Item label="发票上传" extra="请上传事故发生后的指定类型发票">
                            {getFieldDecorator('invoice', {
                                valuePropName: 'fileList',
                                getValueFromEvent: this.normFile,
                                rules: [{ required: true, message: '请上传发票' }],
                            })(
                                <Upload {...invoiceProps}>
                                    <Button>
                                        <Icon type="upload" /> 上传发票
                                    </Button>
                                </Upload>,
                            )}
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item label="事故现场图片" extra="请上传事故现场图片（六张以内）">
                            {getFieldDecorator('accident', {
                                valuePropName: 'fileList',
                                getValueFromEvent: this.normFile,
                                rules: [{ required: true, message: '请上传图片' }],
                            })(
                                <div>
                                    <Upload
                                        action="" //事故现场图片接口
                                        listType="picture-card"
                                        fileList={fileList}
                                        onPreview={this.handlePreview}
                                        onChange={this.handleChange}
                                    >
                                        {fileList.length >= 6 ? null : uploadButton}
                                    </Upload>
                                    <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                                        <img alt="example" style={{ width: '100%' }} src={previewImage} />
                                    </Modal>,
                                </div>
                            )}
                        </Form.Item>
                    </Col>
                </Row>




                <Form.Item style={{width:100}}>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        提交
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default Form.create()(ApplyForm);