import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      frame: [],
      runningTotal: 0,
      currFrame: 0,
      frameTotal: 0,
      miniScore: [],
      miniTurn: 0,
      totalPins: 10,
      turn: 2,
      lastFrameTurn: 3
    }
    this.togglePin = this.togglePin.bind(this);
    // use for function binding
  }

  // this func, depending on which button that is clicked, will subtract the total pins and turn num
  togglePin (e) {
    let score = parseInt(e.target.value);
    let frame = this.state.frame;
    let miniFrame = this.state.miniScore;
    let totalPins = this.state.totalPins;
    this.setState({runningTotal: this.state.runningTotal + score});
   // console.log(this.state.frame);
   if (this.state.turn === 2) { // first throw
    for (let m = 0; m < 3; m++) {
      this.setState({totalPins: this.state.totalPins - score, turn: this.state.turn - 1})
      if(frame[this.state.currFrame][m] === 0) {
        frame[this.state.currFrame][m] = score;
        break;
      }
    }
  } else if (this.state.turn === 1) { // second throw
      for (let m = 0; m < 2; m++) {
        if (score > this.state.totalPins) {
          alert('incorrect amount of pins');
          break;
        } else {
          if (frame[this.state.currFrame][m] === 0) {
            frame[this.state.currFrame][m] = score;
            this.setState({turn: 2, totalPins: 10, currFrame: this.state.currFrame + 1})
            break;            
          }
        }
      }
    }
  }

  componentWillMount () {
    this.frameCreator();
  }

  // this function creates the whole frame
  frameCreator () {
    let frame = [];
    let miniScore = [];
    for (let i = 0; i < 10; i++) {
      miniScore.push(null);
      let miniFrames = [0, 0];
      if (i === 9) {
        frame.push([0, 0, 0]);
      } else { 
      frame.push(miniFrames);
      }
    }
    this.setState({
      frame: frame,
      miniScore: miniScore
    });
  }

  render () {
    return (
      <div>
        <div className="buttons">
          <button className="gutter" value="0" onClick={(e) => this.togglePin(e)}> Gutter Ball! </button>
          <button className="one" value="1" onClick={(e) => this.togglePin(e)}> Hit One Pins </button>
          <button className="two" value="2" onClick={(e) => this.togglePin(e)}> Hit Two Pins </button>
          <button className="three" value="3" onClick={(e) => this.togglePin(e)}> Hit Three Pins </button>
          <button className="four" value="4" onClick={(e) => this.togglePin(e)}> Hit Four Pins </button>
          <button className="five" value="5" onClick={(e) => this.togglePin(e)}> Hit Five Pins </button>
          <button className="six" value="6" onClick={(e) => this.togglePin(e)}> Hit Six Pins </button>
          <button className="seven" value="7" onClick={(e) => this.togglePin(e)}> Hit Seven Pins </button>
          <button className="eight" value="8" onClick={(e) => this.togglePin(e)}> Hit Eight Pins </button>
          <button className="nine" value="9" onClick={(e) => this.togglePin(e)}> Hit Nine Pins </button>
          <button className="strike" value="10" onClick={(e) => this.togglePin(e)}> Hit a Strike! </button>
        </div>
       <div>
        {this.state.frame.map((frame, i) => <Frame keys={i} frame={this.state.frame} frameTotal={this.state.frameTotal} miniScore={this.state.miniScore} pin={this.togglePin} />)}
       </div>
     </div>
    )
  }
}


const Frame = (props) => {
  return (
    <td>
      <div className={props.keys}>{props.miniScore[props.keys]}</div>
        <div className={`mini${props.keys}`}>{props.frame[props.keys]}</div>
    </td>
  )
}




render (<App />, document.getElementById('app'));