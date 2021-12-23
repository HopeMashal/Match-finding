import './App.css';
import React from 'react';
import ApprovalCard from './components/ApprovalCard';
import {Data} from './components/imageData';

class App extends React.Component {
  state={countLike:0,countDislike:0}
  render() {
    return (
      <div className="App">
        <ApprovalCard 
          likeNum={this.state.countLike}
          dislikeNum={this.state.countDislike}
        >
          <p>{Data[0].description}</p><hr/>
          <div className="img-container">
            <img className="animal-img" alt="myimage" src={Data[0].url}></img>
          </div>
        </ApprovalCard>
      </div>
    );
  }
}

export default App;
