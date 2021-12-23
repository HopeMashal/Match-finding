import './App.css';
import React from 'react';
import ApprovalCard from './components/ApprovalCard';
import { Data } from './components/imageData';

class App extends React.Component {
  state={
    countLike:0,
    countDislike:0,
    numOfItems: Data.length-1,
    currentItem: 0,
    isEnd: false,
  }

  setLike = () => {
    this.setState((prevState) => {
      return { countLike: prevState.countLike + 1 };
    });
  };

  setDislike = () => {
    this.setState((prevState) => {
      return { countDislike: prevState.countDislike + 1 };
    });
  };

  setNext = () => {
    if (this.state.currentItem + 1 <= this.state.numOfItems) {
      this.setState((prevState) => {
        return { currentItem: prevState.currentItem + 1 };
      });
    } else {
      this.setState({ isEnd: true });
    }
  };

  render() {
    return (
      <div className="App">
        <ApprovalCard 
          likeNum={this.state.countLike}
          dislikeNum={this.state.countDislike}
          likeFun={this.setLike}
          dislikeFun={this.setDislike}
          nextItem={this.setNext}
          isEnd={this.state.isEnd}
          currentItem={this.state.currentItem}
        >
        </ApprovalCard>
      </div>
    );
  }
}

export default App;
