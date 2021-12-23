import React from 'react';
import Right from './images/true.png';
import Worng from './images/false.png';
import Like from './images/like.png';
import Dislike from './images/dislike.png';
import {Data} from './imageData'

const ApprovalCard = ({nextItem,likeFun,dislikeFun,isEnd,dislikeNum,likeNum,currentItem}) =>{
  const TrueClick = () => {
    if (isEnd) return;
    likeFun();
    nextItem();
  };
  const FalseClick = () => {
    if (isEnd) return;
    dislikeFun();
    nextItem();
  };
  if(isEnd){
    const mycontainer=document.querySelector('.image-description');
    if(likeNum===dislikeNum) mycontainer.innerHTML=`<p><b>The number of likes equals the number of dislikes<br/>You should be more cheerful!!<b/><p/>`;
    if(likeNum>dislikeNum) mycontainer.innerHTML=`<p><b>The number of likes is more than the number of dislikes<br/>Great, you are really cheerful :)<b/><p/>`;
    if(likeNum<dislikeNum) mycontainer.innerHTML=`<p><b>The number of likes is less than the number of dislikes<br/>Your condition is hopeless!!<b/><p/>`;
  }
  return(
    <div className="ui card">
      <div className='extra content'>
        <div className='nav-green'><img src={Like} alt="like"/> {likeNum}</div>
        <div className='nav-red'>{dislikeNum} <img src={Dislike} alt="dislike"/></div>
      </div>
      <div className="content image-description">
          <p>{Data[currentItem].description}</p><hr/>
          <div className="img-container">
            <img className="animal-img" alt="myimage" src={Data[currentItem].url}></img>
          </div>
      </div>
      <div className='extra content'>
        <div className='ui two buttons'>
          <div className='ui basic green button' onClick={TrueClick}><img className='YNBtn' alt="right" src={Right}/></div>
          <div className='ui basic red button' onClick={FalseClick}><img className='YNBtn' alt="worng" src={Worng}/></div> 
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;