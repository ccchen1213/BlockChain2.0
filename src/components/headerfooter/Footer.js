import React from "react";
import {Menu, Icon} from "antd";

class Footer extends React.Component {
    render() {
        return (
            <div className={"foot"}>
                <span>Copyright <Icon type="copyright" /> 2019-2020 </span>

                <span> 网络与信息安全实验室</span>
            </div>
        );
    }
}

export default Footer;