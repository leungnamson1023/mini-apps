import React from 'react';
import Cell from './CellView.jsx';

const Row = (props) => {
  return (
    <div>
      {props.row.map((cell, i) => <Cell key={i} value={cell} columnIndex={i} togglePiece={props.togglePiece} />)}
    </div>
  );
};

export default Row;