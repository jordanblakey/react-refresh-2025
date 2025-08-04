import FancyText from "../components/FancyText";
import InspirationGenerator from "../components/InspirationGenerator";
import Copyright from "../components/Copyright";

export default function TheRenderTree() {
  return (
    <>
      <FancyText title text="Get Inspired App" />
      <InspirationGenerator>
        <Copyright year={2004} />
      </InspirationGenerator>
    </>
  );
}
