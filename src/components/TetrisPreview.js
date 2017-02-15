import React, { Component } from 'react';
import _ from 'underscore';

//renders preview box of next piece
const BLOCK_WIDTH = 30;
const BLOCK_HEIGHT = 30;

class TetrisPreview extends Component {
  render() {
    let preview = _.flatten(this.props.nextPiece);
    return <div>{preview.map( (tile, idx) => {

      let position={
        left : `${ BLOCK_HEIGHT * (idx % 4) }px`, 
        top : `${ BLOCK_WIDTH * Math.floor(idx/4) }px` 
      };

    return <div className={ "tetrisBlock " + (tile?"habitated":"") } style={ position } key={ idx }></div>
    })}</div>;
  }
}

export default TetrisPreview;
