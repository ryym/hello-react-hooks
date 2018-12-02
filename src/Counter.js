import React, { useState } from 'react';

export const Counter = ({ init = 0 }) => {
  // console.log('AA', useState);
  // const count = init;
  // const setCount = () => {};

  const [count, setCount] = useState(init);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};
