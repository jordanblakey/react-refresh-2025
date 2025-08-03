interface RecipeProps {
  drinkers: number;
}

function Recipe({ drinkers }: RecipeProps) {
  return (
    <ol>
      <li>Boil {drinkers} cups of water.</li>
      <li>
        Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.
      </li>
      <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
    </ol>
  );
}

export default function KeepingComponentsPure() {
  return (
    <>
      {/* <Recipe drinkers={2} /> */}
      {/* <Recipe drinkers={10} /> */}
      <TeaSet />
      <TeaGathering />
    </>
  );
}

type CupProps = {
  guest: number;
};

function Cup({ guest }: CupProps) {
  return <h2>Tea cup for guest # {guest}</h2>;
}

function TeaSet() {
  return (
    <>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </>
  );
}

function TeaGathering() {
  const cups = [];
  for (let i = 1; i <= 12; i++) {
    cups.push(<Cup key={i} guest={i} />);
  }
  return cups;
}
