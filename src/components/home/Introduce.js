import React from 'react';
import cars from '../../image/car.png';
import caruser from '../../image/caruser.png';
import company from '../../image/company.png';
import fix from '../../image/fix.png';
import './Home.css'
import 'antd/dist/antd.css';

class Introduce extends React.Component {
    render() {
        return (
            <div>
                <div className={"introduce"}>
                    <div className={"introText"}>
                        <h1 style={{fontSize:"bolder"}}>网站介绍</h1>
                        <p style={{color:"black"}}>车辆事故理赔系统可以使保险理赔过程公开化透
                            明化去中心化。解决保险双方在理赔过程中因无法完
                            全信任而导致的纠纷，保护保险双方合法利益，且可
                            向汽车维修商精确定位车辆内部受损设备。</p>
                    </div>
                    <div className={"introPic"}>
                        <img src={cars}></img>
                    </div>
                </div>

                <div className={"special"}>
                    <div className={"specialPic"}>
                        <img src={cars}></img>
                    </div>
                    <div className={"specialText"}>
                        <h1 style={{fontSize:"bolder"}}>产品特色</h1>
                        <h3>基于车载OBD的车辆参数实时分析技术</h3>
                        <p style={{color:"black"}}>单一地对事故后车辆进行定损维修无法避免骗保
                            情况发生，即车辆在事故前部分设备已损坏的情况。
                            通过实时对OBD盒子记录的带有时间戳的车辆基本信
                            息分析，不仅可以获得车辆受损设备信息，还能筛选
                            出非事故造成的车辆受损设备，为理赔双方提供更为
                            清楚准确的数据支持。</p>
                    </div>
                </div>

                <div className={"special"}>
                    <div className={"introText"}>
                        {/*<h1 style={{fontSize:"bolder"}}>产品特色</h1>*/}
                        <h3>基于区块链技术的去中心化数据存储</h3>
                        <p style={{color:"black"}}>由于保险双方无法完全信任，则与理赔相关数据
                            不可以中心化形式掌握在任何一方手中。运用区块链
                            的分布式账本技术及其链式结构特点，使得所有数据
                            全网备份，且任何人不得对记录的数据篡改，保障记
                            录数据的完全公开、透明可信，使得保险双方对数据
                            的所有权平等，消除信任障碍。</p>
                    </div>
                    <div className={"specialPic"}>
                        <img src={cars}></img>
                    </div>
                </div>

                <div className={"special"}>
                    <div className={"specialPic"}>
                        <img src={cars}></img>
                    </div>
                    <div className={"specialText"}>
                        <h3>基于属性基加密的车主隐私保护方法</h3>
                        <p style={{color:"black"}}>区块链机制要求存储数据全网备份，在保证数据
                            透明的同时，使得车主隐私信息受到泄露威胁。先通
                            过属性基加密算法加密车主隐私信息，再上传至区块
                            链，可实现在保证保险理赔流程数据公开的同时，保
                            证车主隐私信息只向拥有特定属性的人或可信机构授
                            权查看。</p>
                    </div>
                </div>

                <div className={"use"}>
                    <h1>应用领域</h1>
                    <div className={"usearea"}>
                        <div className={"cars"}>
                            <img src={caruser}></img>
                            <p>界面展示了车辆状态明细表。用户可在线申请理赔、查看保险公司给出的受损设备维修价格与官方维修价格。
                            在历史理赔记录中给出了保单号、理赔时间和赔偿金额。</p>
                        </div>

                        <div className={"cars"}>
                            <img src={company}></img>
                            <p>系统将展示目标保单事故车辆的3D透视模型图、受损设备维修费用、事故与保单详情和理赔申请的处理</p>
                        </div>

                        <div className={"cars"}>
                            <img src={company}></img>
                            <p>界面显示了车俩设备受损情况的具体信息，在这一界面中列出了受损设备的名称、
                            图示、设备状态以及使用时间，同时可以在线申请修理</p>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}


export default Introduce;