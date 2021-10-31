import React from 'react';
import Child from './child';
import Child2 from './child2';

function Parent() {
  return (
    <div>
      Parent
      <Child ></Child>
      <Child2></Child2>
    </div>
  );
}

export default Parent;
