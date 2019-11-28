import React from 'react';
import 'antd/dist/antd.css';
import './RegisterForm.css'
import {Form, Input, Button, message} from 'antd';
import axios from "axios";
import {Route, Redirect} from 'react-router-dom';

class RegisterForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            registerFlag:false,
            confirmDirty: false,
            autoCompleteResult: [],
        };
    }

    handleSubmit = e => {
        // e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                axios.post('http://localhost:2560/signup', {values})
                    .then(res => {
                        console.log(res);
                        if(res.data.state === "success"){
                            this.setState({registerFlag:true})
                        }
                        else{
                            this.setState({registerFlag:false});
                            message.error(res.data.msg);

                        }
                    })
                    .catch(err => {
                        console.log(err);
                        this.setState({
                            registerFlag:false
                        })
                    });
            }
            //如果没有错误，则发送用户信息给后端
            else{
                message.error('注册信息有误！');
            }
        });
    };

    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('pwd')) {
            callback('两次密码不一致');
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(['rpwd'], { force: true });
        }
        callback();
    };



    render() {
        if(this.state.registerFlag){
            return <Redirect to="/Login"/>
        }
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 5 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };

        return (
            <Form {...formItemLayout}
                  onSubmit={this.handleSubmit}
                  className="register-form">
                <h2 className={"Register"}>WELCOME TO JOIN US</h2>
                <Form.Item label="用户名">
                    {getFieldDecorator('usr', {
                        rules: [
                            {
                                required: true,
                                message: '请输入您的用户名'
                            },
                            {
                                min:5,max:10,
                                message:'用户名为5-10位字符'
                            },
                            {
                                pattern:new RegExp('^\\w{5,10}$','g'),
                                message:'用户名必须为字母或者数字'
                            }
                        ],
                    })(
                        <Input type="text" placeholder="请输入用户名"/>,
                    )}
                </Form.Item>

                <Form.Item label="邮箱">
                    {getFieldDecorator('email', {
                        rules: [
                            {
                                type: 'email',
                                message: '邮箱格式不正确',
                            },
                            {
                                required: true,
                                message: '请输入您的邮箱',
                            },
                        ],
                    })(<Input placeholder={"请输入您的邮箱"}/>)}
                </Form.Item>

                <Form.Item label="密码" hasFeedback>
                    {getFieldDecorator('pwd', {
                        rules: [
                            {
                                required: true,
                                message: '请输入您的密码',
                            },
                            {
                                min:6,max:15,
                                message:'密码为6-15位字符'
                            },
                            {
                                pattern:new RegExp('^\\w{6,15}$','g'),
                                message:'用户名必须为字母或者数字'
                            },
                            {
                                validator: this.validateToNextPassword,
                            },
                        ],
                    })(<Input.Password placeholder={"请输入您的密码"}/>)}
                </Form.Item>

                <Form.Item label="确认密码" hasFeedback>
                    {getFieldDecorator('rpwd', {
                        rules: [
                            {
                                required: true,
                                message: '请再次输入您的密码',
                            },
                            {
                                validator: this.compareToFirstPassword,
                                message:'两次密码不一致'
                            },
                        ],
                    })(<Input.Password onBlur={this.handleConfirmBlur} placeholder={"请再次输入您的密码"}/>)}
                </Form.Item>

                <Form.Item label="真实姓名">
                    {getFieldDecorator('realname', {
                        rules: [
                            {
                                required: true,
                                message: '请输入您的真实姓名'
                            },
                            {
                                pattern:new RegExp('^[\u4e00-\u9fa5]+$','g'),
                                message:'真实姓名有误'
                            }
                        ],
                    })(<Input placeholder={"请输入您的真实姓名"}/>)}
                </Form.Item>


                <Form.Item label="手机号">
                    {getFieldDecorator('phone', {
                        rules: [
                            {
                                required: true,
                                message: '请输入您的手机号'
                            },
                            {
                                pattern:new RegExp('^1[3456789]\\d{9}$','g'),
                                message:'请输入正确的手机号'
                            }
                            ],
                    })(<Input placeholder={"请输入您的手机号"}/>)}
                </Form.Item>

                <Form.Item label="身份证号">
                    {getFieldDecorator('IDcard', {
                        rules: [
                            {
                                required: true,
                                message: '请输入您的身份证号'
                            },
                            {
                                pattern:new RegExp('^[1-9]\\d{5}(18|19|20)\\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\\d{3}[0-9Xx]$','g'),
                                message:'身份证号有误'
                            }
                        ],
                    })(<Input placeholder={"请输入您的身份证号"}/>)}
                </Form.Item>

                <Form.Item label="车牌号">
                    {getFieldDecorator('carnum', {
                        rules: [
                            {
                                required: true,
                                message: '请输入您的车牌号'
                            }
                        ],
                    })(<Input placeholder={"请输入您的车牌号"}/>)}
                </Form.Item>

                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default Form.create()(RegisterForm);