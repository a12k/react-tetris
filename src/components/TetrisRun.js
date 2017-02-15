import React, { Component } from 'react';
import TetrisBoard from './TetrisBoard';
import '../styles/App.css';

const NUM_ROWS = 20; //num of rows
const NUM_COLS = 10; //num of columns
const TICK_MS = 400; //time between board updates

//array of tetris pieces
const pieces =
  [[[0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0]], //square
   [[0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0]], //I piece
   [[0, 0, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0]], //T piece
   [[0, 0, 0, 0],
    [0, 0, 1, 1],
    [0, 1, 1, 0],
    [0, 0, 0, 0]], //S piece
   [[0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 1, 1],
    [0, 0, 0, 0]], //Z piece
   [[0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0]], //J piece
   [[0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0]]]; //L piece

//mapping keys to keycodes
const KEY_ENTER = 13;
const KEY_SPACE = 32;
const KEY_LEFT = 37;
const KEY_RIGHT = 39;
const KEY_DOWN = 40;
const KEY_A = 65;
const KEY_D = 68;
const KEY_R = 82;

//main run component
class TetrisRun extends Component {
  constructor() {
    super();
    this.state = { 
      gameOver: false, 
      score: 0, 
      currentPiece: this.randomPiece(),
      nextPiece: this.randomPiece(),
      pieceY: 0,
      pieceX: 3,
      rows: this.createArray(),
      isPaused: false, 
      tick: 400,
    };
    //bind keyHandler
    this.keyHandler = this.keyHandler.bind(this);
  };

  //on component mount, add event listener and start game
  componentDidMount() {
    window.addEventListener('keydown', this.keyHandler);
    this.intervalHandler = setInterval(
      () => this.tick(),
      TICK_MS
    );
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyHandler);
    clearInterval(this.intervalHandler);
  };

    //tick called every TICK_MS to update game board
  tick(){
      //if game over, end game
      if (this.state.gameOver){
          return false;
      };
      //checks if piece hits something, if so, applies piece to board
      if (this.intersects(this.nextrows, this.state.currentPiece, this.state.pieceY + 1, this.state.pieceX)) {
          this.setState({
              rows: this.getRows(),
          });
          //checks if rows cleared, and increments score if so
          const r = this.killRows(this.state.rows);
          
          if (r.numRowsKilled){
              this.setState((prevState, props) => ({
                score: prevState.score += 1 + (r.numRowsKilled * r.numRowsKilled * NUM_COLS),
                rows: r.rows,
              }));
          };
          //then checks for game over
          if (this.intersects(this.nextrows, this.state.nextPiece, 0, NUM_COLS / 2 - 2)) {
              this.setState({
                gameOver: true,
              });
          //if no game over, updates state with new piece
          } else {
              this.setState({
                  currentPiece: this.state.nextPiece,
                  pieceY: 0,
                  pieceX: 3,
                  nextPiece: this.randomPiece(),
              });
          }
      //if no intersect, piece increments down by one (y pos += 1)
      } else {
          this.setState((prevState, props) => ({
            pieceY: prevState.pieceY += 1
          }));
      };
      return true;
  };

  //checks for intersection with sides, bottom
  intersects(rows, piece, y, x) {
      for (let i = 0; i < 4; i++)
          for (let j = 0; j < 4; j++)
              if (piece[i][j])
                  if (y+i >= NUM_ROWS || x+j < 0 || x+j >= NUM_COLS || this.state.rows[y+i][x+j])
                      return true;
      return false;
  };

  //if rows killed, removes them and sends data to compute score
  killRows(rows){
      const newRows = [];
      let k = NUM_ROWS;
      for (let i = NUM_ROWS; i --> 0;) {
          for (let j = 0; j < NUM_COLS; j++) {
              if (!rows[i][j]) {
                  newRows[--k] = rows[i].slice();
                  break;
              }
          }
      }
      for (let i = 0; i < k; i++) {
          newRows[i] = [];
          for (let j = 0; j < NUM_COLS; j++)
              newRows[i][j] = 0;
      }
      return {
          'rows': newRows,
          'numRowsKilled': k,
      };
  };

  //when piece settles, fixes piece to board
  applyPiece(rows, piece, y, x){
      const newRows = [];
      for (let i = 0; i < NUM_ROWS; i++)
          newRows[i] = rows[i].slice();
      for (let i = 0; i < 4; i++)
          for (let j = 0; j < 4; j++)
              if (piece[i][j])
                  newRows[y+i][x+j] = 1;
      return newRows;
  };

  //create a multidimensional matrix for board
  createArray(){
      let rows = [];
      for (let i = 0; i < NUM_ROWS; ++i) {
          let columns = [];
          for (let j = 0; j < NUM_COLS; ++j) {
              columns[j] = 0; //change to 0
          };
          rows[i] = columns;
      };
      return rows;
  };

  //gets a random piece from const pieces
  randomPiece() {
      return pieces[Math.floor(Math.random() * pieces.length)];
  };

  render() {
    const nextrows = this.getRows();
    return (
      <div className="tetrisGame">
        <div className="TetrisBoard">

          <TetrisBoard 
            isPaused={this.state.isPaused}
            gameOver={this.state.gameOver}
            score={this.state.score}
            nextPiece={this.state.nextPiece}
            rows={nextrows}
          />

        </div>
      </div>
    );
  };
  
  //move left
  steerLeft() {
    if (!this.intersects(this.nextrows, this.state.currentPiece, this.state.pieceY, this.state.pieceX - 1)){
      this.setState((prevState, props) => ({
        pieceX: prevState.pieceX -= 1
      }));
    };
  };
  
  //move right
  steerRight() {
    if (!this.intersects(this.nextrows, this.state.currentPiece, this.state.pieceY, this.state.pieceX + 1)){
      this.setState((prevState, props) => ({
        pieceX: prevState.pieceX += 1
      }));
    };
  };

  //when down arrow hit, piece moves down by an extra space
  steerDown() {
    if (!this.intersects(this.nextrows, this.state.currentPiece, this.state.pieceY + 1, this.state.pieceX)){
      this.setState((prevState, props) => ({
        pieceY: prevState.pieceY += 1
      }));
    };
  };

  rotateLeft() {
    const newPiece = this.rotatePieceLeft(this.state.currentPiece);
    if (!this.intersects(this.nextrows, newPiece, this.state.pieceY, this.state.pieceX))
      this.setState({
          currentPiece: newPiece,
      });
  };

  rotateRight() {
    const newPiece = this.rotatePieceRight(this.state.currentPiece);
    if (!this.intersects(this.nextrows, newPiece, this.state.pieceY, this.state.pieceX))
        this.setState({
            currentPiece: newPiece,
        });
  };

  //when spacebar hit, piece falls to the bottom
  letFall() {
    while (!this.intersects(this.nextrows, this.state.currentPiece, this.state.pieceY+1, this.state.pieceX)){
      this.setState((prevState, props) => ({
        pieceY: prevState.pieceY += 1
      }));
    };
  };

  rotatePieceLeft(piece) {
    return [
      [piece[0][3], piece[1][3], piece[2][3], piece[3][3]],
      [piece[0][2], piece[1][2], piece[2][2], piece[3][2]],
      [piece[0][1], piece[1][1], piece[2][1], piece[3][1]],
      [piece[0][0], piece[1][0], piece[2][0], piece[3][0]]
    ];
  };

  rotatePieceRight(piece) {
    return [
      [piece[3][0], piece[2][0], piece[1][0], piece[0][0]],
      [piece[3][1], piece[2][1], piece[1][1], piece[0][1]],
      [piece[3][2], piece[2][2], piece[1][2], piece[0][2]],
      [piece[3][3], piece[2][3], piece[1][3], piece[0][3]]
    ];
  };

  getRows() {
    return this.applyPiece(this.state.rows, this.state.currentPiece, this.state.pieceY, this.state.pieceX);
  };

  clear(){
    this.setState({
      gameOver: false, 
      score: 0, 
      currentPiece: this.randomPiece(),
      nextPiece: this.randomPiece(),
      pieceY: 0,
      pieceX: 3,
      rows: this.createArray(),
      isPaused: false, 
    });
    clearInterval(this.intervalHandler);
    this.componentDidMount();
  }

  pause(){
    this.setState({
      isPaused: !this.state.isPaused,
    });
    if (this.state.isPaused){
      clearInterval(this.intervalHandler);
    } else {
      this.componentDidMount();
    }
  }

  keyHandler(k) {
      if (k.shiftKey || k.altKey || k.metaKey)
        return;

      if (k.keyCode === KEY_ENTER) {
        this.pause();
      } else if (k.keyCode === KEY_R) {
        this.clear();
      } else if (k.keyCode === KEY_LEFT && !this.state.isPaused) {
        this.steerLeft();
      } else if (k.keyCode === KEY_RIGHT && !this.state.isPaused) {
        this.steerRight();
      } else if (k.keyCode === KEY_DOWN && !this.state.isPaused) {
        this.steerDown();
      } else if (k.keyCode === KEY_A && !this.state.isPaused) {
        this.rotateLeft();
      } else if (k.keyCode === KEY_D && !this.state.isPaused) {
        this.rotateRight();
      } else if (k.keyCode === KEY_SPACE && !this.state.isPaused) {
        this.letFall();
      } else {
        return;
      }
    }
}

export default TetrisRun;
