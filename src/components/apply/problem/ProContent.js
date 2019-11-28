import React, {Component} from 'react';
import Menus from "../Menus";
import './Problem.css';
import arrow from '../../../image/arrow.png';
import send from '../../../image/send.png';
import checking from '../../../image/checking.png';
import apply from '../../../image/apply.png';
import passed from '../../../image/passed.png';
import monew from '../../../image/money.png';
import { Collapse, Icon } from 'antd';
import {Link} from "react-router-dom";
import company from "../../../image/company.png";
const { Panel } = Collapse;

const customPanelStyle = {
    background: '#f7f7f7',
    borderRadius: 4,
    marginBottom: 24,
    border: 0,
    overflow: 'hidden',
};

class ProContent extends React.Component {

    render() {
        return (

                    <div className={"proTitle"}>
                        <div className={"progressImg"}>
                            <img src={send}></img>
                            <img style={{width:20}} src={arrow}></img>
                            <img src={checking}></img>
                            <img style={{width:20}} src={arrow}></img>
                            <img src={apply}></img>
                            <img style={{width:20}} src={arrow}></img>
                            <img src={passed}></img>
                            <img style={{width:20}} src={arrow}></img>
                            <img src={monew}></img>

                        </div>
                        <Collapse
                            bordered={false}
                            defaultActiveKey={['1']}
                            expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
                        >
                            <Panel header="车损险保障范围都有什么？" key="1" style={customPanelStyle}>
                                <p>一、因下列事故造成保险机动车的损失，保险公司负责赔偿：<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;（1）碰撞、倾覆、坠落；<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;（2）火灾、爆炸；<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;（3）外界物体坠落、倒塌；<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;（4）暴风、龙卷风、雷击、雹灾、暴雨、洪水、地陷、冰陷、崖崩、雪崩、泥石流、滑坡；<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;（5）载运被保险机动车的渡船遭受自然灾害（不同公司有所不同）（只限于驾驶人随船的情形）。</p>

                                <p>二、发生保险事故时，被保险人为防止或者减少被保险机动车的损失所支付的必要的、合理的施救费用，由保险公司承担，最高不超过保险金额的数额。</p>
                            </Panel>

                            <Panel header="交强险的主要保险责任范围是什么？" key="2" style={customPanelStyle}>
                                <p>已投保交强险的机动车发生交通事故造成人身伤亡、财产损失的，由保险公司在交强险责任限额范围内予以赔偿。<br/>
                                    交强险的赔偿范围几乎涵盖了所有道路交通责任风险，且不设免赔率与免赔额；而商业三责险设计有相应的免赔率、免配额或责任免除事项。</p>
                            </Panel>
                            <Panel header="理赔需提交什么材料" key="3" style={customPanelStyle}>
                                <p>一、请根据我公司告知您的索赔须知内容提交以下全部材料：<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;（1）交强险的保险单；<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;（2）被保险人出具的索赔申请书；<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;（3）被保险人和受害人的有效身份证明、被保险机动车行驶证和驾驶人的驾驶证；<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;（4）公安机关交通管理部门出具的事故证明，或者人民法院等机构出具的有关法律文书及其他证明；<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;（5）被保险人根据有关法律法规规定选择自行协商方式处理交通事故的，应当提供依照《交通事故处理程序规定》
                                    规定的记录交通事故情况的协议书；<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;（6）受害人财产损失程度证明、人身伤残程度证明、相关医疗证明以及有关损失清单和费用单据；<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;（7）其他与确认保险事故的性质、原因、损失程度等有关的证明和资料</p>
                                <p>请根据我公司书面告知您的索赔须知内容提交索赔所需的全部材料，我公司及时对您提交的索赔材料的真实性
                                    和完备性进行审核确认，索赔材料不完整的情况下我公司将及时通知您补充提供有关材料，对索赔材料真实
                                    性存在疑问的情况下我公司将及时进行调查核实。</p>
                            </Panel>

                            <Panel header="车险理赔注意事项" key="4" style={customPanelStyle}>
                                <p>一、时效性:48小时：<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;当您的车发生交通意外时,建议第一时间(48小时内,一旦逾期,保险公司有权拒赔)联系交警及保险公司,
                                    通常情况下,若涉及理赔金额较小,可以现场拍照并按照快速处理方案进行处理;
                                    如果事故比较严重, 理赔金额较大时,一定要保护好事故现场,等交警和保险公司相关业务员进行下一步处理。</p>
                                <p>二、应有的材料<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;身份证、驾驶证、行驶证和保险大单“三证一单”及其清晰复印件。</p>
                            </Panel>
                        </Collapse>
                    </div>

        );
    }
}

export default ProContent;
