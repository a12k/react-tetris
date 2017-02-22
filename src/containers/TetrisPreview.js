import React, { Component } from 'react'
import * as types from '../constants/Constants'
import _ from 'underscore'

//renders preview box of next piece
class TetrisPreview extends Component {
  render() {
    let preview = _.flatten(this.props.nextPiece);
    return <div>{preview.map( (tile, idx) => {

      let position={
        left : `${ types.BLOCK_HEIGHT * (idx % 4) }px`, 
        top : `${ types.BLOCK_WIDTH * Math.floor(idx/4) }px` 
      };

    return <div className={ "tetrisBlock " + (tile?"habitated":"") } style={ position } key={ idx }></div>
    })}</div>;
  }
}

export default TetrisPreview;
