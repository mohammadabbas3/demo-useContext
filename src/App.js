import React, { useReducer, useState } from 'react';
import Parent from './parent';
import ValueContext from './ValueContext';

function App() {
//  let [number, setnumber] = useState(45);
let value = useState(48);
  return (
    <ValueContext.Provider value={value}>
      <div>
        Hello World
        <Parent></Parent>
      </div>
      </ValueContext.Provider>
  );
}

export default App;
