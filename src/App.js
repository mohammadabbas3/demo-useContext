import React, { useState } from 'react';
import Parent from './parent';
import ValueContext from './ValueContext';

function App() {
  let [number, setnumber] = useState(45);
  return (
      <div>
        Hello World
        <Parent num={number}></Parent>
        <button  onClick={ () => {setnumber(++number)}}>Update button</button>
      </div>
  );
}

export default App;
