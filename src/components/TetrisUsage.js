import React from 'react';

//renders control instructions
function TetrisUsage(props) {
  return (
    <div>
      <table>
        <tbody>
          <tr><th>Cursor Keys</th><td>Steer</td></tr>
          <tr><th>a/d</th><td>Rotate</td></tr>
          <tr><th>Space bar</th><td>Let fall</td></tr>
          <tr><th>Enter</th><td>Toggle pause</td></tr>
          <tr><th>r</th><td>Restart game</td></tr>
        </tbody>
      </table>
    </div>
  );
}

export default TetrisUsage;