"use client";

import { useState } from "react";

export default function About() {
  const [counter, setCounter] = useState(0);
  const handleClick = () => setCounter((counter) => counter + 1);
  return (
    <div>
      <div>{counter}</div>
      <button onClick={handleClick}>click me!</button>
    </div>
  );
}
