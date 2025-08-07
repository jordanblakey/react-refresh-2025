// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Image from "./components/Image";

createRoot(document.getElementById("root")!).render(<Gallery />);

function Gallery() {
  return (
    <section>
      <h1>Inspiring Sculptures</h1>
      <Image />
      <Image />
      <Image />
    </section>
  );
}
