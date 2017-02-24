import React, { Component } from 'react'
import * as types from '../constants/Constants'
import { flatten } from '../utils/helpers'

//renders tetris board itself
class RightPane extends Component {
  render() {
    let flattened = flatten(this.props.rows);
    return <div className="tetrisBoard">{flattened.map( (tile, idx) => {

      let position = {
        left : `${ types.BLOCK_HEIGHT * (idx % types.NUM_COLS) }px`, 
        top : `${ types.BLOCK_WIDTH * Math.floor(idx/types.NUM_COLS) }px` 
      };

    return <div className={ "tetrisBlock " + (tile?"habitated":"") } style={ position } key={ idx } ></div>
    })}</div>;
  }
}

export default RightPane;
