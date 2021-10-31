import React, { useContext, useReducer } from 'react';
import numberReducer from './numberReducer';
import ValueContext from './ValueContext';

function Child2() {
let [state, dispatch] = useReducer(numberReducer,52)
  return (
    <div>
      Child 2 {state}
      <br/>
      <button onClick={() => {dispatch({type:"Increment", val: 67}); }}>Increment</button>
      <br/>
      <button onClick={() => {dispatch({type:"Decrement", val: 34}); }}>Decrement</button>
    </div>
  );
}

export default Child2;
