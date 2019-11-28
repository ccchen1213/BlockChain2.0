import React, { Component } from 'react';

//import '../claimprogress/Progress.css';
import arrowUrl from '../../../image/arrow.png';

export default class FlowChart extends Component {
  state = {
    stepData: [
      { title: '申请已提交', imgUrl: require('../../../image/send.png') },
      { title: '审核中', imgUrl: require('../../../image/checking.png') },
      { title: '资料核验', imgUrl: require('../../../image/apply.png') },
      { title: '审核通过', imgUrl: require('../../../image/passed.png') },
      { title: '理赔金已发放', imgUrl: require('../../../image/money.png') },
    ]
  };
  

  render() {
    return (
      <div className='y-prog-container'>
        <ClaimProgressComponentStepList data={this.state.stepData} />
        <div className='y-prog-footer'>
        </div>
      </div>
    )
  }
}
// 整条步骤
function ClaimProgressComponentStepList(props) {
  //console.log(props);
  let { data } = props;
  //console.log(data)
  
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
