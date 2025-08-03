// import { recipes } from "../data/recipes";
// import { peopleObjects, peopleStrings } from "../data/people";
// import { getImageUrl } from "../utils/image";

// function ListOfStrings() {
//   const listItems = peopleStrings.map((person) => <li>{person}</li>);
//   return <ul>{listItems}</ul>;
// }

// function ListOfObjects() {
//   const chemists = peopleObjects.map((person) => (
//     <li key={person.id}>
//       <img src={getImageUrl(person)} alt={person.name} />
//       <p>
//         <b>{person.name}:</b>
//         {" " + person.profession + " "}
//         known for {person.accomplishment}
//       </p>
//     </li>
//   ));
//   return chemists;
// }

// export function RecipeList() {
//   return (
//     <div>
//       <h1>Recipes</h1>
//     </div>
//   );
// }

// interface RecipeProps {
//   id: string;
//   name: string;
//   ingredients: Array<string>;
// }

// function Recipe({ name, ingredients }: RecipeProps) {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <ul>
//         {ingredients.map((ingredient) => (
//           <li key={ingredient}>{ingredient}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default function RenderingLists() {
//   return (
//     <div>
//       <h1>Recipes</h1>
//       {recipes.map((recipe) => (
//         <Recipe {...recipe} key={recipe.id} />
//       ))}
//     </div>
//   );
// }

const poem = {
  lines: [
    "I write, erase, rewrite",
    "Erase again, and then",
    "A poppy blooms.",
  ],
};

export function Poem() {
  return (
    <article>
      {poem.lines.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </article>
  );
}

export default function RenderingLists() {
  return <Poem />;
}
