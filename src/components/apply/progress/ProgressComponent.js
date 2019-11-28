import React, { Component } from 'react';

import './Progress.css';
import arrowUrl from '../../../image/arrow.png';

export default class ProgressComponent extends Component {

  state = {
    inWhatStep: 2,
      stepData: [
          { title: '申请已提交', imgUrl: require('../../../image/send.png') },
          { title: '审核中', imgUrl: require('../../../image/checking.png') },
          { title: '资料核验', imgUrl: require('../../../image/apply.png') },
          { title: '审核通过', imgUrl: require('../../../image/passed.png') },
          { title: '理赔金已发放', imgUrl: require('../../../image/money.png') },
      ]
  };

  
  //组件渲染后使用
  componentDidMount() {
    let steps = document.getElementsByClassName('y-prog-step')
    for (let i=0; i<steps.length; i++) {
      if (i + 1 > this.state.inWhatStep) steps[i].classList.add('y-dark')
    }
  }

  render() {
    return (
      <div className='y-prog-container'>
        <ClaimProgressComponentStepList data={this.state.stepData} />
        <div className='y-prog-footer'>
            <h3>一、提交索赔材料</h3>
            <p>
                请根据我公司书面告知您的索赔须知内容提交索赔所需的全部材料，我公司及
                时对您提交的索赔材料的真实性和完备性进行审核确认，索赔材料不完整的情况
                下我公司将及时通知您补充提供有关材料，对索赔材料真实性存在疑问的情况下
                我公司将及时进行调查核实。
            </p>

            <h3>一、赔款计算和审核</h3>
            <p>
                在您提交的索赔材料真实齐全的情况下，我公司根据保险合同的约定和相关的法律
                法规进行保险赔款的准确计算和赔案的内部审核工作，并与您达成最终的赔偿协议。
            </p>



        </div>
      </div>
    )
  }
}
// 整条步骤
function ClaimProgressComponentStepList(props) {

  let { data } = props;
  
  const ClaimProgressComponentRow = () => {
    let res = [];
    data.forEach((value, index) => {
      res.push(<ClaimProgressComponentStep data={value} key={index} />)
      if (index + 1 !== data.length) res.push(
        <div className='y-prog-arrow' key={Math.random()}>
          <img src={arrowUrl} alt='arrow' />
        </div>
      )
    });
    return res
  };

  return (
    <div className='y-prog-main'>
      {ClaimProgressComponentRow()}
    </div>
  )
}
// 各个步骤
function ClaimProgressComponentStep(props) {
  let { data } = props;
  return (
    <div className='y-prog-step'>
      <div className='y-prog-stepimg'>
        <img src={data.imgUrl} alt={data.title} />
      </div>
      <p className='y-prog-title'>{data.title}</p>
    </div>
  )
}
