import { useState } from 'react';


let i=0;

function Square() {
  const [value, setValue] = useState(null);
  
  function handleClick() {
    if(value) return;
    if(i++%2===0)
    setValue('X');
    else
    setValue('O');
  }

  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setsquares]=useState(Array(9).fill(null));
  return (
    <>
      <div className="board-row">
        <Square  />
        <Square  />
        <Square  />
      </div>
      <div className="board-row">
        <Square />
        <Square  />
        <Square  />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>

    </>
  );
}




