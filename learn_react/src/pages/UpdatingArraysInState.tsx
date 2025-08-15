import { useState } from "react";

let nextId = 0;

export default function UpdatingArraysInState() {
  return (
    <>
      <List />
      <ShapeEditor />
      <hr />
      <CounterList />
    </>
  );
}

function List() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState<{ id: number; name: string }[]>([]);

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          if (name) {
            setArtists([...artists, { id: nextId++, name: name }]);
          }
        }}
      >
        Add to end
      </button>
      <button
        onClick={() => {
          if (name) {
            setArtists([{ id: nextId++, name: name }, ...artists]);
          }
        }}
      >
        Add to beginning
      </button>
      <button
        onClick={() => {
          if (name) {
            setArtists([...artists].reverse());
          }
        }}
      >
        reverse
      </button>
      <button
        onClick={() => {
          if (name) {
            let newArtists = [...artists];
            console.log(newArtists);
            setArtists(
              newArtists.sort((a, b) => {
                if (a.name > b.name) return -1;
                if (b.name > a.name) return 1;
                return 0;
              })
            );
          }
        }}
      >
        sort
      </button>

      <button
        onClick={() => {
          if (name) {
            let insertAt = 1;
            const nextArtists = [
              ...artists.slice(0, insertAt),
              { id: nextId++, name: name },
              ...artists.slice(insertAt),
            ];
            setArtists(nextArtists);
            setName("");
          }
        }}
      >
        insert at 1
      </button>

      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>
            {artist.name}
            <button
              onClick={() => {
                setArtists(artists.filter((a) => a.id !== artist.id));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

type Shape = { id: number; type: string; x: number; y: number };

let initialShapes = [
  { id: 1, type: "circle", x: 50, y: 100 },
  { id: 2, type: "square", x: 150, y: 100 },
  { id: 3, type: "circle", x: 250, y: 100 },
];

function ShapeEditor() {
  const [shapes, setShapes] = useState(initialShapes);

  function handleClick() {
    const nextShapes = shapes.map((shape: Shape) => {
      if (shape.type === "square") {
        return shape;
      } else {
        return { ...shape, y: shape.y + 50 };
      }
    });
    setShapes(nextShapes);
  }

  return (
    <>
      <button onClick={handleClick}>move circles down!</button>
      {shapes.map((shape) => (
        <div
          key={shape.id}
          style={{
            background: "purple",
            position: "absolute",
            left: shape.x,
            top: shape.y,
            borderRadius: shape.type === "circle" ? "50%" : "",
            width: 20,
            height: 20,
          }}
        >
          ...
        </div>
      ))}
    </>
  );
}

let initialCounters = [0, 0, 0];

function CounterList() {
  const [counters, setCounters] = useState(initialCounters);

  function handleIncrementalClick(index: number) {
    const nextCounters = counters.map((c, i) => (i === index ? c + 1 : c));
    setCounters(nextCounters);
  }

  return (
    <ul>
      {counters.map((counter, i) => (
        <li key={i}>
          {counter}
          <button
            onClick={() => {
              handleIncrementalClick(i);
            }}
          >
            +1
          </button>
        </li>
      ))}
    </ul>
  );
}
