import React, { useContext } from 'react';
import ValueContext from './ValueContext';

function Child(props) {
  return (
    <div>
      Child number {props.num}
    </div>
  );
}

export default Child;
