import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Form} from "antd";


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
  const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
});
