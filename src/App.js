import React, { useState } from 'react';
import Parent from './parent';
import ValueContext from './ValueContext';

function App() {
//  let [number, setnumber] = useState(45);
let value = 81;
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
