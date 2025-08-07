import "../styles/SculptureList.css";

import { useState } from "react";
import { sculptureList } from "../data/sculptures";

export function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleClick() {
    setIndex((index + 1) % sculptureList.length);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];

  return (
    <div className="sculptureList">
      <div className="imageContainer">
        <img src={sculpture.url} alt={sculpture.alt} />
      </div>
      <div className="text">
        <button onClick={handleClick}>Next</button>
        <h2>
          <i>{sculpture.name} </i>
          <br />
          by {sculpture.artist}
        </h2>
        <h3>
          ({index + 1} of {sculptureList.length})
        </h3>
        <button onClick={handleMoreClick}>
          {showMore ? "Hide" : "Show"} details
        </button>
        {showMore && <p>{sculpture.description}</p>}
      </div>
    </div>
  );
}

export default function StateAComponentsMemory() {
  return (
    <div className="Page">
      <Gallery />
      <Gallery />
    </div>
  );
}
