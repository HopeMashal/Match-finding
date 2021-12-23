import React from 'react';
import Right from './images/true.png';
import Worng from './images/false.png';
import Like from './images/like.png';
import Dislike from './images/dislike.png';

const ApprovalCard = (props) =>{
  return(
    <div className="ui card">
      <div className='extra content'>
        <div className='nav-green'><img src={Like} alt="like"/> {props.likeNum}</div>
        <div className='nav-red'>{props.dislikeNum} <img src={Dislike} alt="dislike"/></div>
      </div>
      <div className="content">{props.children}</div>
      <div className='extra content'>
        <div className='ui two buttons'>
          <div className='ui basic green button'><img className='YNBtn' alt="right" src={Right}/></div>
          <div className='ui basic red button'><img className='YNBtn' alt="worng" src={Worng}/></div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;