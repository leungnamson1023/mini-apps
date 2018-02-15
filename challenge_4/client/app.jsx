import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      frame: [],
      runningTotal: 0,
      gameTotal: 0,
      firstThrow: 0,
      secondThrow: 0,
      bonuses: 0,
      totalPins: 10,
      turn: 2,
      lastFrameTurn: 3
    }
    this.togglePin = this.togglePin.bind(this);
    // use for function binding
  }

  // this func, depending on which button that is clicked, will subtract the total pins and turn num
  togglePin (e) {
    console.log(e.target.className);
    
  }

  componentWillMount () {
    this.frameCreator();
  }

  // this function creates the whole frame
  frameCreator () {
    let frame = [];
    for (let i = 0; i < 10; i++) {
      let miniFrames = [0, 0];
      frame.push(miniFrames);
    }
    this.setState({
      frame: frame,
    });
  }




  render () {
    return (
      <div>
        <div className="buttons">
          <button className="gutter" onClick={(e) => this.togglePin(e)}> Gutter Ball! </button>
          <button className="one" onClick={(e) => this.togglePin(e)}> Hit One Pins </button>
          <button className="two" onClick={(e) => this.togglePin(e)}> Hit Two Pins </button>
          <button className="three" onClick={(e) => this.togglePin(e)}> Hit Three Pins </button>
          <button className="four" onClick={(e) => this.togglePin(e)}> Hit Four Pins </button>
          <button className="five" onClick={(e) => this.togglePin(e)}> Hit Five Pins </button>
          <button className="six" onClick={(e) => this.togglePin(e)}> Hit Six Pins </button>
          <button className="seven" onClick={(e) => this.togglePin(e)}> Hit Seven Pins </button>
          <button className="eight" onClick={(e) => this.togglePin(e)}> Hit Eight Pins </button>
          <button className="nine" onClick={(e) => this.togglePin(e)}> Hit Nine Pins </button>
          <button className="strike" onClick={(e) => this.togglePin(e)}> Hit a Strike! </button>
        </div>

      <div>
      {this.state.frame.map((frame, i) => <Frame keys={i} frame={frame} />)}
      </div>

      </div>
    )
  }
}


const Frame = (props) => {
  return (
    <td>
      <div className="frames"> Frames </div>
        <td>
          <div className="mini"> miniFrames </div>
        </td>
    </td>
  )
}





render (<App />, document.getElementById('app'));