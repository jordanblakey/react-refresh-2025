import React, { useState } from "react";
import { useImmer } from "use-immer";

export default function UpdatingObjectsInState() {
  return (
    <>
      <CursorFollow />
      <Form />
      <Form2 />
    </>
  );
}

function Form() {
  const [person, setPerson] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });

  function handleFirstNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPerson({
      firstName: e.target.value,
      lastName: person.lastName,
      email: person.email,
      artwork: {
        ...person.artwork,
      },
    });
  }

  function handleLastNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPerson({
      ...person,
      lastName: e.target.value,
    });
  }

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPerson((p) => {
      p.email = e.target.value;
      // return JSON.parse(JSON.stringify(p));
      // return Object.assign({}, p);
      return { ...p };
    });
  }

  return (
    <>
      <label>
        First name:
        <input value={person.firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name:
        <input value={person.lastName} onChange={handleLastNameChange} />
      </label>
      <label>
        Email:
        <input value={person.email} onChange={handleEmailChange} />
      </label>
      <p>
        {person.firstName} {person.lastName} ({person.email})
      </p>
    </>
  );
}

function CursorFollow() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  return (
    <>
      <div
        onPointerMove={(e) => {
          setPosition({
            x: e.clientX,
            y: e.clientY,
          });
        }}
        style={{
          position: "relative",
          width: "25vw",
          height: "25vh",
          border: "1px solid #000",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            backgroundColor: "red",
            borderRadius: "50%",
            transform: `translate(${position.x}px, ${position.y}px)`,
            left: -20,
            top: -20,
            width: 20,
            height: 20,
          }}
        ></div>
      </div>
    </>
  );
}

function Form2() {
  const [person, updatePerson] = useImmer({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });

  function handleFirstNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    updatePerson((draft) => {
      draft.firstName = e.target.value;
    });
  }

  function handleLastNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    updatePerson((draft) => {
      draft.lastName = e.target.value;
    });
  }

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    updatePerson((draft) => {
      draft.email = e.target.value;
    });
  }

  return (
    <>
      <label>
        First name:
        <input value={person.firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name:
        <input value={person.lastName} onChange={handleLastNameChange} />
      </label>
      <label>
        Email:
        <input value={person.email} onChange={handleEmailChange} />
      </label>
      <p>
        {person.firstName} {person.lastName} ({person.email})
      </p>
    </>
  );
}
