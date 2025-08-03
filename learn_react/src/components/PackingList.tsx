import type { JSX } from "react/jsx-runtime";

type ItemProps = {
  name: string;
  isPacked: boolean;
};

function Item({ name, isPacked }: ItemProps) {
  let itemContent: JSX.Element | string = name;
  if (isPacked) {
    itemContent = <del>{name + "✅"}</del>;
  }
  return <li className="item">{itemContent}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}
