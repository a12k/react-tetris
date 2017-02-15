import React, { Component } from 'react';

class Main extends Component {

  render() {
    let styles = {
        background: 'transparent'
    };

    return (
      <div className="jumbotron col-sm-12 text-center" style={ styles }>
        {this.props.children}
      </div>
  )}
}

export default Main;
