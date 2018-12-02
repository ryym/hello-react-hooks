import React from 'react';
import { Counter } from './Counter';
import { GitHub } from './GitHub';

export const App = () => {
  return (
    <div>
      <h1>Hello, Hooks</h1>
      <section>
        <h2>Counter</h2>
        <Counter />
      </section>
      <section>
        <h2>GitHub</h2>
        <GitHub />
      </section>
    </div>
  );
};
