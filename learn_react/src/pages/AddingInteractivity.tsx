// e.stopPropagation() - stops the event handlers attached to the tags above from firing
// e.preventDefault() - prevents the default browser behavior for the few events that have it

import type { MouseEventHandler } from "react";

// interface ToolbarProps {
//   onPlayMovie: MouseEventHandler;
//   onUploadImage: MouseEventHandler;
// }

function Toolbar() {
  return (
    <div onClick={() => alert("you clicked on the toolbar!")}>
      <UploadButton />
      <PlayButton movieName="Kiki's Delivery Service" />
    </div>
  );
}

interface ButtonProps {
  onClick: MouseEventHandler;
  children: React.ReactNode;
}

function Button({ onClick, children }: ButtonProps) {
  return <button onClick={onClick}>{children}</button>;
}

export default function AddingInteractivity() {
  return (
    <>
      <Toolbar />
      <SignUp />
    </>
  );
}

function UploadButton() {
  return <Button onClick={() => alert("Uploading!")}>Upload Image</Button>;
}

function PlayButton({ movieName }: { movieName: string }) {
  function handlePlayClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    alert(`Playing ${movieName}!`);
  }
  return <Button onClick={handlePlayClick}>Play "{movieName}"</Button>;
}

function SignUp() {
  return (
    <>
      <form onSubmit={() => alert("Submitting!")}>
        <input type="text" />
        <button>Send</button>
      </form>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Submitting, but prevent default!");
        }}
      >
        <input type="text" />
        <button>Send</button>
      </form>
    </>
  );
}
