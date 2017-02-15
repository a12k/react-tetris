import React, { Component } from 'react';
import _ from 'underscore';

//renders tetris board itself
class RightPane extends Component {
  render() {
    let flattened = _.flatten(this.props.rows);
    return <div className="tetrisBoard">{flattened.map( (tile, idx) => {

      let position = {
        left : `${ 30 * (idx % 10) }px`, 
        top : `${ 30 * Math.floor(idx/10) }px` 
      };

    return <div className={ "tetrisBlock " + (tile?"habitated":"") } style={ position } key={ idx } ></div>
    })}</div>;
  }
}

export default RightPane;
