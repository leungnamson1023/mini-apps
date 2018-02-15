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

  componentWillMount () { // willMount would be better since we want the board to be there before rendering our App component
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
  
  setPlayer () { // if currPlayer isn't one, set it to player two
    return (this.state.currentPlayer === this.state.player1) ? this.state.player2 : this.state.player1; 
  }


  // this func will toggle the piece
  togglePiece (columnIndex) { // colIndex will be passed in from CellView Component

    // only allow toggling of a piece of gameOver is set to false
    if (!this.state.gameOver) {
      let board = this.state.board;
      for (let r = 5; r >= 0; r--) {
       // if it is not null, we will see that position based on who is the current play
        if (!board[r][columnIndex]) {
          board[r][columnIndex] = this.state.currentPlayer; // tested and when clicked, it adds all to the column, need to stop the loop once clicked
          break;
        }
      }

      // checks the outcome of the game
      let result = this.checkAll(board); // will either be 1, 2, or draw
      if (result === this.state.player1) {
        this.setState({ 
          gameOver: true, 
          message: 'Player One wins!',
          playerOneScore: this.state.playerOneScore + 1 });
      } else if (result === this.state.player2) {
        this.setState({ 
          gameOver: true, 
          message: 'Player Two wins!',
          playerTwoScore: this.state.playerTwoScore + 1 });
      } else if (result === 'draw') {
        this.setState({ 
          gameOver: true,
          message: 'Draw game :(!' 
        });
      } 

      else {
        this.setState({ 
          currentPlayer: this.setPlayer()
        });
      }
    } 
  }
  


  /***** THESE FUNCS CHECKS THE BOARD ******/
  // this check can start from row 4 and up because you need a min of four to win
  vertical (board) {
    for (let r = 3; r < 6; r++) {
      for (let c = 0; c < 7; c++) {
        if (board[r][c]) { // not null
          if (board[r][c] === board[r - 1][c] && board[r][c] === board[r - 2][c] && board[r][c] === board[r - 3][c]) {
            return board[r][c]; // this will return which player wins    
          }
        }
      }
    }
  }


  // horizontal rows can win anywhere, but only up to the 5th column
  horizontal (board) {
    for (let r = 0; r < 6; r++) {
      for (let c = 0; c < 4; c++) {
        if (board[r][c]) { //not null
          if (board[r][c] === board[r][c + 1] && board[r][c] === board[r][c + 2] && board[r][c] === board[r][c + 3]) {
            return board[r][c]; // this will return which player wins 
          }
        }
      }
    }
  }
  
  // upper min limit is row 4, and column is the other limit
  diagonalRight (board) {
    for (let r = 3; r < 6; r++) {
      for (let c = 0; c < 4; c++) {
        if (board[r][c]) { //not null
          if (board[r][c] === board[r - 1][c + 1] && board[r][c] === board[r - 2][c + 2] && board[r][c] === board[r - 3][c + 3]) {
            return board[r][c]; // this will return which player wins 
          }
        }
      }
    }
  }
  
  // upper min limit is row 4
  diagonalLeft (board) {
    for (let r = 3; r < 6; r++) {
      for (let c = 3; c < 7; c++) {
        if (board[r][c]) { //not null
          if (board[r][c] === board[r - 1][c - 1] && board[r][c] === board[r - 2][c - 2] && board[r][c] === board[r - 3][c - 3]) {
            return board[r][c]; // this will return which player wins 
          }
        }
      }
    }
  }
  
  //checks to see if there is a draw on board
  draw (board) {
    for (let r = 0; r < 6; r++) {
      for (let c = 0; c < 7; c++) {
        if (board[r][c] === null) {
          return null;
        }
      }
    }
    return 'draw';    
  }
  

 // this function is to invoke all checks when invoked, to see which player wins or if it was a draw
  checkAll (board) {
    return this.vertical(board) || this.diagonalRight(board) || this.diagonalLeft(board) || this.horizontal(board) || this.draw(board);
  }


  render () {
    return (
      <div>

        <button className="button" onClick={() => {this.createBoard()}}> New Game</button>
        <div>
          <div>
            {this.state.board.map((row, i) => (<Row key={i} row={row} togglePiece={this.togglePiece} />))}
          </div>
        </div>
        <h2 className="id"> Scoreboard: </h2>
          <div> Player One: </div>
            <ul>{this.state.playerOneScore}</ul>
          <div> Player Two: </div>
            <ul>{this.state.playerTwoScore}</ul>
        <p className="message">{this.state.message}</p>

      </div>
    );
  }
}


render(<App />, document.getElementById('app'));