import React, { useContext } from 'react';
import ValueContext from './ValueContext';

function Child(props) {
  let value = useContext(ValueContext)
  let updValue = value[1]
  return (
    <div>
      Child number {value[0]}
      <br/>
      <button onClick={() => {updValue(++value[0])}}>increase value</button>
      <br/>
      <button onClick={() => {updValue(--value[0])}}>decrease value</button>

    </div>
  );
}

export default Child;
