import React from "react";
import FancyText from "./FancyText";
import Color from "./Color";
import inspirations from "../data/inspirations";

interface Props {
  children: React.ReactNode;
}

export default function InspirationGenerator({ children }: Props) {
  const [index, setIndex] = React.useState(0);
  const inspiration = inspirations[index];
  const next = () => setIndex((index + 1) % inspirations.length);
  return (
    <>
      <p>Your inspirational {inspiration.type} is:</p>
      {inspiration.type === "quote" ? (
        <FancyText text={inspiration.value} />
      ) : (
        <Color value={inspiration.value} />
      )}
      <button onClick={next}>Inspire me again</button>
      {children}
    </>
  );
}
