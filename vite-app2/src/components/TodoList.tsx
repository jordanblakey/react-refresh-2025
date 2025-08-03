import type { Person } from "../types/Person";
import { formatDate } from "../utils/date";
import Avatar from "./Avatar";
import Profile from "./Profile";
import Clock from "./Clock";

import React, { useState, useEffect } from "react";

const today = new Date();

const greg: Person = {
  name: "Gregorio Y. Zara",
  imageId: "7vQD0fP",
  imageSize: "s",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

const katsuko: Person = {
  name: "Katsuko Saruhashi",
  imageId: "YfeOqp2",
  imageSize: "s",
};

const aklilu: Person = {
  name: "Aklilu Lemma",
  imageId: "OKS67lh",
  imageSize: "s",
};

export default function TodoList() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId);
  });

  return (
    <>
      <h1>
        {greg.name}'s To Do List for {formatDate(today)}
      </h1>
      <Clock color="#aaa" time={time} />
      <Avatar person={greg} size={100} />
      <Avatar person={katsuko} size={75} />
      <div>
        <Profile person={aklilu} size={50} />
      </div>
      <ul style={greg.theme}>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </>
  );
}
