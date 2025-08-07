import { useState } from "react";

export default function QueuingStateUpdates() {
  return (
    <>
      <PrevValue />
      <WhichOne />
    </>
  );
}

function PrevValue() {
  const [number, setNumber] = useState(0);
  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber((n) => n + 1);
          setNumber((n) => n + 1);
          setNumber((n) => n + 1);
          // this will increment by 1 3 times as batched state updates in the next re-render,
          // since an updater function is used that takes in the previous value...
        }}
      >
        +3
      </button>
    </>
  );
}

function WhichOne() {
  const [number, setNumber] = useState(0);
  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 5); // this is a set operation -- it disregards all previous values
          setNumber((n) => n + 1); // this just takes in the previous value -- note that these happen in a queue when the component re-renders
        }}
      >
        Increase the number
      </button>
    </>
  );
}
