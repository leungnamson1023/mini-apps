import React from 'react';
import { render } from 'react-dom';
import Row from './RowView.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      player1: 1,
      player2: 2,
      currentPlayer: null,
      board: [],
      gameOver: false,
      message: '',
      playerOneScore: 0,
      playerTwoScore: 0
    };
    this.togglePiece = this.togglePiece.bind(this);
  }

  componentWillMount () { // Did mount will not work here because we want to create a new board before render
    this.createBoard();
  }
  


  /******** ROWS AND COLUMNS WILL BE REFERENCED BY "R" AND "C" ********/
  // creates a grid of 6 rows and 7 columns, each row will have elements of null
  createBoard () {
    let board = [];
    for (let r = 0; r < 6; r++) {
      let row = [];
      for (let c = 0; c < 7; c++) { row.push(null) }
      board.push(row);
    }
    // once we create a new board, set the board to our grid, and start the game by setting current player to player1
    this.setState({
      board: board,
      currentPlayer: this.state.player1,
      gameOver: false,
      message: ''
    });
  }
  
  setPlayer () {
    return (this.state.currentPlayer === this.state.player1) ? this.state.player2 : this.state.player1; // if currPlayer isn't one, set it to player two
  }


  // this func will toggle the piece
  togglePiece (columnIndex) {
    if (!this.state.gameOver) {
      let board = this.state.board;
      for (let r = 5; r >= 0; r--) {
       // if it is not null, we will see that position based on who is the current play
        if (!board[r][columnIndex]) {
          board[r][columnIndex] = this.state.currentPlayer; // tested and when clicked, it adds all to the column, need to stop the loop once clicked
          console.log(board[r][columnIndex], this.state.currentPlayer);
        }
      }
    }
  }

  render () {
    return (
      <div>
        <button className="button" onClick={() => {this.createBoard()}}> New Game</button>
        
        <table>
          <thead>
          </thead>
          <tbody>
            {this.state.board.map((row, i) => (<Row key={i} row={row} togglePiece={this.togglePiece} />))}
          </tbody>
        </table>
        
        <p className="message">{this.state.message}</p>
      </div>
    );
  }
}


render(<App />, document.getElementById('app'));