import React from 'react';
import Child from './child';

function Parent(props) {
  return (
    <div>
      Parent
      <Child num={props.num}></Child>
    </div>
  );
}

export default Parent;
