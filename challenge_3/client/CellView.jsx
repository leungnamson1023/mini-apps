import React from 'react';

const Cell = (props) => {
  let color = 'white';
  if (props.value === 1) {
    color = 'red';
  } else if (props.value === 2) {
    color = 'black';
  }
    
  return (
    <td>
      <div className="cell" onClick={() => {props.togglePiece(props.columnIndex)}}>
        <div className={color}></div>
      </div>
    </td>
  );
};

export default Cell;