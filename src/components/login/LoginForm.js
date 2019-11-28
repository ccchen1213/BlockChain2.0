import React from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import './LoginForm.css';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import {Form, Icon, Input, Button, Radio, message} from 'antd';

class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loginFlag:false
        };
    }

    //登录按钮提交
    handleSubmit = e => {
        e.preventDefault();//连接后注释

        this.props.form.validateFields((err, values) => {
            if (!err) {
                axios.post('http://localhost:2560/signin', {values})
                    .then(res => {
                        console.log(res);
                        if(res.data.state === "success"){
                            this.setState({loginFlag:true})
                            console.log(res.data);
                        }
                        else{
                            this.setState({loginFlag:false});
                            message.error(res.data.msg);

                        }
                    })
                    .catch(err => {
                        console.log(err);
                        this.setState({
                            loginFlag:false
                        })
                    });
                console.log('Received values of form: ', values);
            }
            //如果没有错误，则发送用户信息给后端
            else{
                message.error("输入信息有误！");
            }
        });
    };

    render() {
        if(this.state.loginFlag){
            return <Redirect to="/Home"/>
        }
        const { getFieldDecorator } = this.props.form;
        return (

            <Form onSubmit={this.handleSubmit} className="login-form">
                <p className={"login"}>Login in</p>
                <Form.Item>
                    {getFieldDecorator('usr', {
                        initialValue:'',
                        rules: [
                            {
                                required: true,
                                message: '请输入您的用户名!'
                            },
                            {
                                min:5,max:10,
                                message:'用户名长度不在范围内'
                            },
                            {
                                pattern:new RegExp('^\\w+$','g'),
                                message:'用户名必须为字母或者数字'
                            }
                        ],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="text"
                            placeholder="请输入用户名"/>,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('pwd', {
                        initialValue:'',
                        rules: [
                            {
                                required: true,
                                message: '请输入您的密码!'
                            }
                        ],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="请输入密码"/>,
                    )}
                </Form.Item>

                <Form.Item>
                    {getFieldDecorator('root', {
                        initialValue:1,
                    })(<Radio.Group className={"idType"}>
                        <Radio value={1}>投保人</Radio>
                        <Radio value={2}>保险人</Radio>
                        <Radio value={3}>维修商</Radio>
                    </Radio.Group>)}

                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    <span className={"register"}> Or <Link to="/Register">register now!</Link></span>
                </Form.Item>
            </Form>
        );
    }
}


export default Form.create()(LoginForm);